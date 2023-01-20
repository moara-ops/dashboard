
process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
    // publicPath: '/dashboard/',
    pwa: {
      workboxOptions: {
        exclude: [/_redirects/]
      }
    },
    // assetsDir: './dashboard/',
    transpileDependencies: [
        'vuetify'
    ],
    configureWebpack: {
        devServer: {
            headers: { 'Access-Control-Allow-Origin': '*' }
        }
    },
    publicPath: process.env.NODE_ENV === 'production' ? '/dashbaord/' : '/'
}
