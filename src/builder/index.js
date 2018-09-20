const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const portfinder = require('portfinder')
const Glob = require('glob')
const chalk = require('chalk')
const open = require('opn')
const { promisify } = require('util')
const baseWebpackConf = require('./webpack/base.config')

const glob = promisify(Glob)

module.exports = class Builder {
  constructor () {}

  async run () {
    this.getConifg()
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

      // open browser
      const uri = `http://${host}:${port}`
      if (serverOptions.open) {
        const openOptions = {}
        open(uri, openOptions)
      }

      console.log(`
        ${chalk.bgGreen.black('App running at:')}
        ${chalk.green(uri)}
      `)
    })
  }

  async getConifg () {
    const options = { cwd: 'src' }
    const views = await glob('views/**/*.vue', options)
    const layouts = await glob('layouts/**/*.vue', options)
    const plugins = await glob('plugins/**/*.js', options)

    console.log(`
        ${chalk.yellow('layouts')}: ${layouts}
        ${chalk.yellow('views')}: ${views}
        ${chalk.yellow('plugins')}: ${plugins}
    `)
  }
}