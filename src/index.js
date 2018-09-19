const Builder = require('./builder')
const { version } = require('../package.json')

module.exports = class Ving {
  constructor (options) {
    this.builder = new Builder()
  }

  static get version () {
    return version
  }
}