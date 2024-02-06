const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "[name].js",
	},

	devServer: {
		historyApiFallback: true,
		hot: true,
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

		new HtmlWebpackPlugin({
			title: "Recurso Webpack",
		}),
	],

	optimization: {
		runtimeChunk: true,
	},
};
