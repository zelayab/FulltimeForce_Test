const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/github/commits', 
    createProxyMiddleware({
      target: 'http://localhost:3000/',
      changeOrigin: true,
    })
  );
};
