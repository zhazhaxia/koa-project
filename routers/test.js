
module.exports = function (ctx) {
	console.log(ctx.query)
	ctx.body = `test page`
}