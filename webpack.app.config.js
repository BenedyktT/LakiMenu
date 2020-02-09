const path = require("path");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const imageminMozjpeg = require("imagemin-mozjpeg");
const imageminWebp = require("imagemin-webp");
const Dotenv = require("dotenv-webpack");
module.exports = {
	entry: {
		app: "./src/ReactIndex.js"
	},
	output: {
		filename: "[chunkhash].bundle.js",
		publicPath: "/"
	},
	devServer: {
		historyApiFallback: true
	},
	target: "web",
	module: {
		rules: [
			{
				test: /\.js|jsx$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
						options: { minimize: true }
					}
				]
			},

			{
				test: /\.(png|jpg|gif|jpeg)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "assets/img"
						}
					},
					{
						loader: "image-maxsize-webpack-loader",
						options: {
							"max-width": 1024,
							"max-height": 1024,
							useImageMagick: false
						}
					}
				]
			},
			{
				test: /\.svg$/,
				use: ["@svgr/webpack", "file-loader"]
			},
			{
				test: /\.(mp4)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "assets/img"
						}
					}
				]
			},

			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"]
			},
			{
				test: /\.scss$/,
				use: [
					"style-loader",
					MiniCssExtractPlugin.loader,
					"css-loader",
					{ loader: "postcss-loader", options: {} },
					"sass-loader"
				]
			}
		]
	},
	plugins: [
		new Dotenv(),
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html",
			chunks: ["app"]
		}),

		new HtmlWebPackPlugin({
			template: "./src/cocktails.html",
			filename: "./cocktails.html",
			chunks: ["index"]
		}),

		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		}),

		new ImageminPlugin({
			pngquant: { quality: "80-90" },
			plugins: [imageminMozjpeg({ progressive: true, quality: 70 })]
		})
	]
};
