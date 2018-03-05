const fs = require('fs')
const path = require('path')
var count=0//调试，避免递归死循环
module.exports = {
	getConfig(p){
		let cf = this.isBuildConfigExit(p)
		count=0
		if (cf) {
			// console.log("SUCCESS === "+cf)
			// console.log(require(cf))
			return require(cf)
		}else{
			console.error('ERROR ==== build_config.js no exit')
			return false
		}
	},
	isBuildConfigExit(p){
		count++
		if (fs.existsSync(path.join(p,'build_config.js'))) {
			return path.join(p,'build_config.js')
		}
		if (p.match(/(projects|projects_node)[\\\/]?$/ig)||count>3) {
			console.log('mmmmmmmmmm',p.match(/(projects|projects_node)[\\\/]?$/ig))
			return false
		}
		return this.isBuildConfigExit(path.resolve(p,'../'))
	}
}