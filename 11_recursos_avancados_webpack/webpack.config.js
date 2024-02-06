const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "bundle.js",
	},

	devServer: {
		historyApiFallback: true,
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				include: path.resolve(__dirname, "src"),
			},
		],
	},

	mode: "production",
	plugins: [
		new webpack.ProvidePlugin({
			_: "lodash",
		}),
	],
};
