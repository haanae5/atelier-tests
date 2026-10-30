const app = require('./app');

const server = app.listen(3000, '127.0.0.1', () => {
  console.log('Serveur prêt sur http://127.0.0.1:3000');
});

server.on('error', (err) => {
  console.error('Erreur serveur:', err);
});
