const path = require("path");

module.exports = {
	entry: "./src/index.ts",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	mode: "development",
	resolve: {
		extensions: [".ts", ".js"],
	},
	target: "node",
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: ["ts-loader"],
			},
		],
	},
};
