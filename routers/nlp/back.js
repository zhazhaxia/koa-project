const fs = require('fs')
const path = require('path')

let dic = fs.readFileSync(path.join(__dirname,'./ChineseDic.txt')).toString().replace(/(,\w*\n?)/ig,'')

// console.log(dic)

function hasMatch(str,idx,len){
	let word = str.slice(idx,len)
	if (dic.indexOf(word)>=0) {
		return word
	}else{
		return false
	}
}


module.exports = function (ctx) {
	ctx.set('Access-Control-Allow-Origin', '*');  
	let str = ctx.query.w||'全幼儿园最可爱'

	let maxLenth = 4,
		strLenth = str.length,
		nowIdx = strLenth,
		tmpLenth = 4,
		fenciArr = []

	while (true) {
		if (nowIdx<=1) {
			fenciArr.push(str.slice(0,nowIdx))
			break;
		}
		let hm = hasMatch(str,nowIdx-tmpLenth,nowIdx)
		if (hm) {
			fenciArr.push(hm)
			nowIdx-=tmpLenth
			tmpLenth=4
		}else{
			tmpLenth--
		}
		if (tmpLenth==1) {
			fenciArr.push(str.slice(nowIdx-tmpLenth,nowIdx))
			nowIdx--
			tmpLenth=4
		}
	}
	// fenciArr.pop()
	let w = fenciArr.reverse().join('/')
	console.log(w)
	ctx.body = w
}