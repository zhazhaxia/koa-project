module.exports = {
	base:'demo2',
	client:{
		entry:'client.js',
		require:[
			'zepto',
			// 'jqeury',
		]
	},
	tpl:{
		name:'index.html',
		entry:'tpl.js',
	}
}