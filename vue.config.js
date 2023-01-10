const {defineConfig} = require('@vue/cli-service')
const Dotenv = require('dotenv-webpack');
module.exports = defineConfig({
    transpileDependencies: true
})

module.exports = {
    chainWebpack: config => {
      config.module
        .rule('ts')
        .test(/\.ts?$/)
        .use('babel-loader')
        .loader('babel-loader')
        .options({
          presets: ['@babel/preset-typescript']
        })
    },
    configureWebpack: {
        plugins: [
          new Dotenv({
            path: '.env',
            safe: true
          })
        ]
      }
  }