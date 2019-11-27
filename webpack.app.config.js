const path = require("path");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const imageminMozjpeg = require("imagemin-mozjpeg");
const imageminWebp = require("imagemin-webp");
const Dotenv = require("dotenv-webpack");
module.exports = {
	entry: {
		index: "./src/index.js",
		main: "./src/main.js",
		about: "./src/about.js",
		reserve: "./src/reserve.js",
		jolamenu: "./src/jolamenu.js",
		gallery: "./src/gallery.js"
	},
	output: {
		filename: "[chunkhash].bundle.js"
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
				test: /\.(png|svg|jpg|gif|jpeg)$/,
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
			chunks: ["index", "main", "gallery"]
		}),
		new HtmlWebPackPlugin({
			template: "./src/about.html",
			filename: "./about.html",
			chunks: ["index", "about"]
		}),
		new HtmlWebPackPlugin({
			template: "./src/menu.html",
			filename: "./menu.html",
			chunks: ["index"]
		}),
		new HtmlWebPackPlugin({
			template: "./src/cocktails.html",
			filename: "./cocktails.html",
			chunks: ["index"]
		}),
		new HtmlWebPackPlugin({
			template: "./src/reserve.html",
			filename: "./reserve.html",
			chunks: ["index", "reserve"]
		}),
		new HtmlWebPackPlugin({
			template: "./src/success.html",
			filename: "./success.html",
			chunks: ["index"]
		}),
		new HtmlWebPackPlugin({
			template: "./src/jolamenu.html",
			filename: "./jolamenu.html",
			chunks: ["index", "jolamenu"]
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
