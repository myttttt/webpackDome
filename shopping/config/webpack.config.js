//导入处理文件路径模块(nodejs 核心模块)
const path = require('path');
const webpack = require('webpack');

//__dirname: nodejs全局变量, 当文件的绝对路径
console.log('__dirname ==> ', __dirname);

module.exports = {

	//入口文件配置
	entry: {
		//app就会作为打包输出文件名
		app: './app/app.js'
	},

	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			jquery: "jquery",
			"window.jQuery": "jquery"
		})
	],

	output: {
		path: path.resolve(__dirname, '../js'),
		filename: '[name].js'
	},
	 module: {
      rules: [
         {test: /\.css$/, use: [{loader: 'style-loader'}, {loader: 'css-loader', options: {modules: false}}]},
          {test: /\.less$/, use: [{loader: 'style-loader'}, {loader: 'css-loader'},{loader: 'less-loader'}]}

     ]
   }

}

