const webpack = require('webpack')
const ejs = require('ejs')
const path = require('path')
const fs = require('fs')
const host = 'http://127.0.0.1:3030'
module.exports = {
	packJs (opt={}) {
		webpack({
			// mode : 'development',//开发环境development,正式环境production//webpack4支持
	        entry : opt.entryPath,
			output : {
				path : opt.outputPath,
				filename : 'bundle.js',
				// libraryTarget: "commonjs2"
			},
			target:'web',
			module:{
			},
			plugins: [

			]
	    }, function(err, stats) {
	    	if (err || stats.hasErrors()) {// 在这里处理错误
				console.log('error=====:',err)
			}else{
				console.log('package ok====')
			}
			console.log(stats.toString({
			    chunks: false,  // 使构建过程更静默无输出
			    colors: true    // 在控制台展示颜色
			}));
			console.log('==============package JS ok===============')
			// console.log(stats);
			opt.callback&&opt.callback()
			// console.log('error=====:',err,stats);
	    });
	},
	packServerJs(opt={}){
		webpack({
			// mode : 'development',//开发环境development,正式环境production//webpack4支持
	        entry : opt.entryPath,
			output : {
				path : opt.outputPath,
				filename : 'index.js',
				libraryTarget: "commonjs2"
			},
			target:'node',
			module:{
				rules : [
					{
						test:'/\.ejs$/',
						use:'ejs-loader',
					}
				]
			},
			plugins: [

			]
	    }, function(err, stats) {
	    	if (err || stats.hasErrors()) {// 在这里处理错误
				console.log('error=====:',err)
			}else{
				console.log('package ok====')
			}
			console.log(stats.toString({
			    chunks: false,  // 使构建过程更静默无输出
			    colors: true    // 在控制台展示颜色
			}));
			console.log('==============package server JS ok===============')
			// console.log(stats);
			opt.callback&&opt.callback()
			// console.log('error=====:',err,stats);
	    });
	},
	packHtml (opt={}) {
		var tmpStr = fs.readFileSync(opt.entryPath).toString()

		var renderStr = ejs.render(tmpStr, 
			{data:{
				title:'这是title',
				footHTML:`<script src="${host+`/${opt.project}/bundle.js`}"></script>`//插入js
			}})
		fs.writeFileSync(opt.outputPath, renderStr);
		console.log('==============package HTML ok===============')
	}
}