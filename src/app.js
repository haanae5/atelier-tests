const express = require('express');
const db = require('./db');

const app = express();

app.disable('x-powered-by');

app.use(express.json());
app.use(express.static('public'));

// Route utilisateur
app.get('/users/:id', async (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    return res.status(400).json({ erreur: 'id invalide' });
  }

  const { rows } = await db.query(
    'SELECT id, nom FROM users WHERE id = $1',
    [id]
  );

  if (!rows[0]) {
    return res.status(404).json({ erreur: 'introuvable' });
  }

  return res.json(rows[0]);
});

// Route connexion
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === 'a@test.fr' && password === 'secret') {
    return res.sendStatus(200);
  }

  return res.sendStatus(401);
});

// Route santé pour Playwright et Docker
app.get('/health', (req, res) => {
  return res.status(200).json({ status: 'OK' });
});

module.exports = app;
app.disable('x-powered-by');