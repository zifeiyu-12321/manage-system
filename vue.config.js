const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: false, // eslint-loader 是否在保存的时候检查
  // 注意 configureWebpack 有两种用法
  // configureWebpack: {
  //   externals: {
  //     'AMap': 'AMap' // 高德地图配置
  //   },
  // },

  chainWebpack: config => {   // 这是 vue/cli4 的配置方法
    config.module
      .rule('svg')
      .exclude.add(resolve('./src/svg-icon/icon'))  // svg 图标存放的位置
      .end()

    config.module
      .rule('icon')
      .test(/\.svg$/)
      .include.add(resolve('./src/svg-icon/icon'))  // svg 图标存放的位置
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },

  configureWebpack: (config) => {
    config["externals"] = {
      'AMap': 'AMap' // 高德地图配置
    };

    config.module.rules.push({
      // 处理markdown文件
      test: /\.md$/,
      use: [
        {
          loader: 'html-loader'
        },
        {
          loader: 'markdown-loader',
          options: {
          }
        }
      ]
    }
    )
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    open: true,
    compress: true,
    port: 8080,
    hot: true,
    hotOnly: true,
    https: false, // 启用https
    // proxy 可以配置跨域
  }
}