const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
      })
    ]
  },
  pwa: {
    name: 'みこボタン',
    themeColor: '#FFDBE5',
    msTileColor: '#FFDBE5',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      background_color: '#FFDBE5'
    },
    workboxOptions: {
      skipWaiting: true,
      importWorkboxFrom: 'disabled',
      importScripts: 'https://cdn.jsdelivr.net/npm/workbox-sw@4.3.1/build/workbox-sw.js'
    }
  }
}