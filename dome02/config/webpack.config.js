//导入处理文件路径模块(nodejs 核心模块)
let path = require('path');


//__dirname: nodejs全局变量, 当文件的绝对路径
console.log('__dirname ==> ', __dirname);

module.exports = {

	//入口文件配置
	entry: {
		//app就会作为打包输出文件名
		app: './app/app.js'
	},

	// //输出文件配置
	output: {
		//打包输出路径, 路径必须为绝对路径
		path: path.resolve(__dirname, '../public'),

		//输出文件名 [name] 代表 entry入口配置文件路径的键名

		filename: '[name].js'

		// filename: '[name].min.js'

		//带hash文件名
//		filename: '[name].[hash].js'
		
		//指定输出文件名
		// filename: 'a.js'

	}

}