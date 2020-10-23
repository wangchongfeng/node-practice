const http = require('http')
module.exports = class Koa {
  constructor() {
    this.middleWares = []
    this.ctx = {}
  }
  listen(port, cb) {
    const  app = http.createServer((req, res) => {
      compose(this.middleWares, this.ctx)
    })
    app.listen(port, cb)
  }
  use(middleWare) {
    this.middleWares.push(middleWare)
  }
}

function compose(middleWares, ctx) {
  return dispatch(0)
  function dispatch(i) {
    let middleWare = middleWares[i]
    if (!middleWare) {
      return Promise.resolve()
    } else {
      return Promise.resolve(middleWare(ctx, function next() {
        return dispatch(i + 1)
      }))
    }
    
  }
}