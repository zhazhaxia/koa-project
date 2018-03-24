// import tpl from 'ejs-loader!./tpl.ejs'
import tpl from './tpl.ejs'
// var a = require('./tpl.ejs')
 // var a = require('ejs-loader!./tpl.ejs');
console.log(tpl({}))
export default function (ctx) {
	ctx.body = `demo 2`
}