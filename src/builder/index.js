const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const portfinder = require('portfinder')
const baseWebpackConf = require('./webpack/base.config')

module.exports = class Builder {
  constructor () {}

  async run () {
    this.compiler = webpack(baseWebpackConf)
    // server
    const serverOptions = baseWebpackConf.devServer
    portfinder.basePort = baseWebpackConf.devServer.port
    const port = await portfinder.getPortPromise()
    const host = serverOptions.host
    this.server = new WebpackDevServer(this.compiler, serverOptions)

    this.server.listen(port, host, err => {
      if (err) {
        return console.log(err)
      }
      console.log(`  App running at:`)
      console.log(`  ${host}:${port}`)
    })
  }
}