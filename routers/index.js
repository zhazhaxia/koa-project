const path = require('path')
const Router = require('koa-router')
const router = new Router()
const test = require('./test')
// const login = require('./login')
const asyncPage = require('./async-page')

router.get('/router/test', test)
router.get('/router/async-page',asyncPage)
// router.post('/router/login', login)


//项目直出路由
const routerConfig = require('../config/config.router')
routerConfig.map((item)=>{
	let p = path.join('../projects_node/',item.routerPath,item.routerFile),
		r = require(p)
	router.get(item.routerName, r)
})
module.exports = router