const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "./dist"),
		publicPath: "http://localhost:9001/",
	},

	devServer: {
		contentBase: path.resolve(__dirname, "./dist"),
		index: "index.html",
		port: 9001,
		historyApiFallback: true,
	},

	mode: "development",

	resolve: {
		extensions: [".js", ".jsx", ".json"],
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: require.resolve("babel-loader"),
				options: {
					presets: [require.resolve("@babel/preset-react")],
				},
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "./public/index.html",
			title: "App",
		}),
// Adicionados em remote o nome da aplicacao e na url o nome+url dos MFEs a serem consumidos
		new ModuleFederationPlugin({
			name: "App",
			remotes: {
				HomeApp: "HomeApp@http://localhost:9002/remoteEntry.js",
				ContactApp: "ContactApp@http://localhost:9003/remoteEntry.js",
			},
		}),
	],
};
