const webpack = require('webpack')
const devServer = require('webpack-dev-server')
const baseWebpackConf = require('./webpack/base.config')

module.exports = class Builder {
  constructor () {
    this.compiler = webpack(baseWebpackConf)
  }
}

