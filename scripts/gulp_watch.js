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
	let outputPath = path.join(BAEE_DIR,`../output/static/${project}/`)
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
				outputPath:path.join(BAEE_DIR,`../output/static/${project}/${configFile.tpl.name}`),
				entryPath:path.join(BAEE_DIR,`../projects/${project}/${configFile.tpl.entry}`)
			})
		}
	})
})

let projects_node_watch = gulp.watch([PROJECT_HOME+'projects_node/**/*.js',PROJECT_HOME+'projects_node/*/*.ejs'])
projects_node_watch.on('change', function(event) {
	let nowPath = path.resolve(event.path,'..')
	let	configFile = util.getConfig(nowPath)
	console.log(configFile)

	let project = configFile.base//当前改变的项目
	let entryPath = path.join(BAEE_DIR,`../projects_node/${project}/${configFile.server.entry}`)
	let outputPath = path.join(BAEE_DIR,`../output/node/${project}/`)
	if (!fs.existsSync(outputPath)) {//output路径不存在
		 fs.mkdirSync(outputPath)
	}

	//打包server
	pack.packServerJs({
		entryPath,
		outputPath,
		project,
		callback(){
			console.log('pack server done!!!')
			// pack.packHtml({
			// 	project,
			// 	outputPath:path.join(BAEE_DIR,`../output/static/${project}/${configFile.tpl.name}`),
			// 	entryPath:path.join(BAEE_DIR,`../projects/${project}/${configFile.tpl.entry}`)
			// })

		}
	})
	//打包js 如果存在
	if (configFile.client) {
		let entryPath = path.join(BAEE_DIR,`../projects_node/${project}/${configFile.client.entry}`)
		let outputPath = path.join(BAEE_DIR,`../output/static/${project}_node/`)
		if (!fs.existsSync(outputPath)) {//output路径不存在
			 fs.mkdirSync(outputPath)
		}
		pack.packJs({
			entryPath,
			outputPath,
			project,
			callback(){
				console.log('pack clinet done!!!')
				// pack.packHtml({
				// 	project,
				// 	outputPath:path.join(BAEE_DIR,`../output/static/${project}/${configFile.tpl.name}`),
				// 	entryPath:path.join(BAEE_DIR,`../projects/${project}/${configFile.tpl.entry}`)
				// })

			}
		})
	}
})