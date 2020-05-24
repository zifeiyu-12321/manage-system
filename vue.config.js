const path = require('path')

module.exports = {
  configureWebpack: {
    externals: {
     'AMap': 'AMap' // 高德地图配置
    }
   },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    open: true,
    compress: true,
    port: 8080,
    hot: true,
    hotOnly: true
    // proxy 可以配置跨域
  }
}