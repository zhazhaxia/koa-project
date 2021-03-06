const Koa = require('koa')
const static = require('koa-static')//静态资源
const app = new Koa()
const router = require('./routers/index')
const bodyParser = require('koa-bodyparser')

app.use(bodyParser())
app.use(static('./static'));//静态资源
app.use(static('./output/static'));//静态资源
app
.use(router.routes())
.use(router.allowedMethods())

app.use(async (ctx) => {
  ctx.status = 404
  ctx.body = `404 Not Found !!!`
})
app.listen(3030)
console.log('server run on port:3030')

// require('./scripts/gulp_watch')


//test PR
