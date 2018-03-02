module.exports = {
	base:'demo2/subdemo',
	client:{
		entry:'client.js',
		require:[
			'zepto',
			// 'jqeury',
		]
	},
	tpl:{
		name:'index.html',
		entry:'tpl.ejs',
	}
}