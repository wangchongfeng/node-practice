const http = require('http')
module.exports = class Koa {
  constructor() {
    this.middleWares = []
  }
  listen(port, cb) {
    const  app = http.createServer((req, res) => {
      middleWares.for
    })
    app.listen(port, cb)
  }
  use(middleWare) {
    this.middleWares.push(middleWare)
  }
}

async function compose(middleWares) {
  return 
}