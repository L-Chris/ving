export default {
  el: '#ving',
  render (h) {
    return h('h1', {
      domProps: {
        id: 'ving',
        innerText: 'Hello Ving!'
      }
    })
  },
  data () {
    return {
      count: 0
    }
  }
}