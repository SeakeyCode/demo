const koa = require('koa')
const app = new koa()
app.use((ctx, next) => {
  ctx.body = [
    {
      test: '11111111',
    },
  ]
  await next()
})

app.use((ctx, next) => {
  const start = new Date().getTime()
  console.log(start)
})

app.listen(3001)
