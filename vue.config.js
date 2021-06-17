module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'assets',
  productionSourceMap: false,
  filenameHashing: false,
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8082,
    https: false,
    hotOnly: false
  },
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add('/packages/')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  }
}
