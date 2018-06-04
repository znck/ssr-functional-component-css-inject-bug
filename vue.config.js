const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  configureWebpack: {
    target: 'node',
    node: undefined,
    output: {
      libraryTarget: 'commonjs2'
    },
    devtool: false,
    plugins: [
      new VueSSRServerPlugin()
    ],
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
      }
    },
    externals: nodeExternals()
  },
  css: {
    extract: false
  }
}