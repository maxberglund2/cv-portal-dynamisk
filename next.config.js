const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/cv-portal-dynamisk' : '',
  assetPrefix: isProd ? '/cv-portal-dynamisk/' : '',
  trailingSlash: true,
};
