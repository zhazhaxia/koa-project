const gulp = require('gulp')
const path = require('path')
const fs = require('fs')
const util = require('./util')
const pack = require('./pack')

const PROJECT_HOME = __dirname+'/../' //如果是本层执行，路径为../
const BAEE_DIR = __dirname
console.log('gulp watch start========= '+path.resolve(PROJECT_HOME))
// console.log(path.join(BAEE_DIR,`../output/demo2/`))
//监听projetcs下js,html模板的改变
let projects_watch = gulp.watch([PROJECT_HOME+'projects/**/*.js',PROJECT_HOME+'projects/*/*.ejs'])
projects_watch.on('change', function(event) {
	let nowPath = path.resolve(event.path,'..')
	let	configFile = util.getConfig(nowPath)
	// console.log('change path=====',path.resolve(event.path,'..'),configFile)
	path.normalize(event.path).replace(/projects[\\\/]{1}(.*?)[\\\/]{1}/ig,function(){//获取当前projects下的项目
		// console.log(arguments)
		var project = arguments[1].replace(/[^\w\_\d]+/ig,'')//当前改变的项目

		let outputPath = path.join(BAEE_DIR,`../output/${project}/`)
		let entryPath = path.join(BAEE_DIR,`../projects/${project}/client.js`)
		// console.log('output path==:'+outputPath)
		// console.log('entry path==:'+entryPath)
		if (!fs.existsSync(outputPath)) {//output路径不存在
			 fs.mkdirSync(outputPath)
		}
		//打包js
		pack.packJs({
			entryPath,
			outputPath,
			project,
			callback(){
				pack.packHtml({
					project,
					outputPath:path.join(BAEE_DIR,`../output/${project}/index.html`),
					entryPath:path.join(BAEE_DIR,`../projects/${project}/tpl.ejs`)
				})
			}
		})
	})
})