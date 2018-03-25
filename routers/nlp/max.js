const fs = require('fs')
const path = require('path')

let dic = fs.readFileSync(path.join(__dirname,'./ChineseDic.txt')).toString().replace(/(,\w*)/ig,'')

function hasMatch(str,idx,len){
	let word = str.substr(idx,len)
	if (dic.indexOf(word)>=0) {
		return word
	}else{
		return false
	}
}

module.exports = function (ctx) {
	// console.log(dic)
	let str = ctx.query.w||'全幼儿园最可爱'

	let maxLenth = 4,
		strLenth = str.length,
		nowIdx = 0,
		tmpLenth = 4,
		fenciArr = []

	while (true) {
		if (nowIdx>=(strLenth-1)) {
			fenciArr.push(str.substr(nowIdx,maxLenth))
			break;
		}
		let hm = hasMatch(str,nowIdx,tmpLenth)
		if (hm) {
			fenciArr.push(hm)
			nowIdx+=tmpLenth
			tmpLenth=4
		}else{
			tmpLenth--
		}
		if (tmpLenth==1) {
			fenciArr.push(str.substr(nowIdx,tmpLenth))
			nowIdx++
			tmpLenth=4
		}
	}
	// fenciArr.pop()
	let w = fenciArr.join('/')
	console.log(w)
	ctx.body=w
}