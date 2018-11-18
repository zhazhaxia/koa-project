const path = require('path')
const fs = require('fs')
const Router = require('koa-router')
const router = new Router()
const test = require('./test')
// const login = require('./login')
const max = require('./nlp/max')
const back = require('./nlp/back')
// const asyncPage = require('./async-page')

router.get('/router/test', test)
// router.get('/router/async-page',asyncPage)
// router.post('/router/login', login)
router.get('/router/max', max)
router.get('/router/back', back)

//项目直出路由
const routerConfig = require('../config/config.router')
routerConfig.map((item)=>{
	let p = path.join(__dirname,'../output/node/',item.routerPath,item.routerFile)
	console.log(p)
	if (fs.existsSync(p)) {//路径存在
		let	r = require(p).default||require(p)
		// console.log(r)
		router.get(item.routerName, r)
	}
	
})
module.exports = router