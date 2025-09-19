export default {
  "/app/api": {
    "target": "http://localhost:9080",
    "secure": false,
    "changeOrigin": true,
    "bypass": function (req, res, proxyOptions) {
      console.log('[PROXY]', req.method, req.url, '->', proxyOptions.target);
    }
  }
}