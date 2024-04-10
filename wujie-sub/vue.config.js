const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    headers: {
        'Access-Control-Allow-Origin': '*'
    },
    port: 8081
  },
  transpileDependencies: true,
  configureWebpack: {
    output: {
        libraryTarget: 'umd',
        library: 'sub-cloud-net'
    }
}
})
