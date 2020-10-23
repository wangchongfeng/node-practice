
const Koa = require('./lib/index.js')
const app = new Koa();

const f1 = (ctx, next) => {
  console.log('f1 start')
  next()
  console.log('f1 end')
}
const f2 = (ctx, next) => {
  console.log('f2 start')
  next()
  console.log('f2 end')
}
app.use(f1)
app.use(f2)

app.listen(0911, ()=>console.log('app is runing:0911'))

