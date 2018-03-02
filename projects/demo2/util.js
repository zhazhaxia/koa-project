// 注意 webpack中，import 跟 module.exports不能混用。用export default代替
import util3 from './util3'
// var util3  = require('./util3')
// module.exports = {
// 	get(){
// 		return util3.get()+'!!!1111111'
// 	}
// }

export default {
	get(){
		return util3.get()+'!!!1111111----'
	}
}