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
	let project = configFile.base//当前改变的项目
	let entryPath = path.join(BAEE_DIR,`../projects/${project}/${configFile.client.entry}`)
	let outputPath = path.join(BAEE_DIR,`../output/${project}/`)
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
				outputPath:path.join(BAEE_DIR,`../output/${project}/${configFile.tpl.name}`),
				entryPath:path.join(BAEE_DIR,`../projects/${project}/${configFile.tpl.entry}`)
			})
		}
	})
})

let projects_node_watch = gulp.watch([PROJECT_HOME+'projects_node/**/*.js',PROJECT_HOME+'projects_node/*/*.ejs'])
projects_node_watch.on('change', function(event) {
	let nowPath = path.resolve(event.path,'..')
	console.log(nowPath)
})