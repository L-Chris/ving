const Builder = require('./builder')
const { version } = require('../package.json')

module.exports = class Ving {
  constructor () {
    this.builder = new Builder()
  }

  run () {
    this.getConfig()
    this.builder.run()
  }

  // 获取配置
  getConfig () {}

  static get version () {
    return version
  }
}