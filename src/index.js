const Builder = require('./builder')
const { version } = require('../package.json')

module.exports = class Ving {
  constructor () {
    this.builder = new Builder()
  }

  run () {
    this.builder.run()
  }

  static get version () {
    return version
  }
}