// const { i18n } = require('./next-i18next.config')
const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  // i18n,
  basePath: isProd ? '/uco-next' : '',
  assetPrefix: isProd ? '../uco-next' : '',
}

//hs