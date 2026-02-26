const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function setupProxy(app) {
  app.use(
    "/api/yahoo",
    createProxyMiddleware({
      target: "https://query1.finance.yahoo.com",
      changeOrigin: true,
      secure: true,
      pathRewrite: {
        "^/api/yahoo": "",
      },
    })
  );
};
