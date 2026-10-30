
module.exports = {
  testDir: './e2e',
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: 'http://127.0.0.1:3000',
  },
  webServer: {
    command: 'node src/server.js',
    url: 'http://127.0.0.1:3000/health',
    reuseExistingServer: true,
    timeout: 60000,
  },
};