export class Koa {
  constructor() {
    this.middleWares = []
  },
  listen(port, cb) {

  },
  use(middleWare) {
    this.middleWares.push(middleWare)
  }
}