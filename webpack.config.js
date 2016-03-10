var path = require('path')

module.exports = {
	entry: "./app/components/App.js",
	output: {
		filename: "public/bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
					presets: ['react','es2015']
				}
			}
		]
	},
	resolve: {
		alias: {
			'config': path.resolve(__dirname,'config')
		}
	}
}