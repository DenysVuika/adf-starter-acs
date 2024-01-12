const BASE_URL = process.env.BASE_URL || 'http://localhost:8080';

module.exports = {
  '/alfresco': {
    target: BASE_URL,
    pathRewrite: {
      '^/alfresco/alfresco': '',
    },
    secure: false,
    changeOrigin: true,
    onProxyReq: function (request) {
      if (request['method'] !== 'GET') {
        request.setHeader('origin', BASE_URL);
      }
    },
    // workaround for REPO-2260
    onProxyRes: function (proxyRes) {
      const header = proxyRes.headers['www-authenticate'];
      if (header?.startsWith('Basic')) {
        proxyRes.headers['www-authenticate'] = 'x' + header;
      }
    },
  },
};
