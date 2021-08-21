module.exports = {
  transpileDependencies: [
    'vuetify'
  ],

  productionSourceMap: false, // 关闭SourceMap

  chainWebpack: config => {
    config.plugins.delete('prefetch')
  },
}
