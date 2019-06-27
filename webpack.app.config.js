const path = require('path');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
/* const CopyWebpackPlugin = require('copy-webpack-plugin'); */
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminWebp = require('imagemin-webp');
const Dotenv = require('dotenv-webpack');
module.exports = {
  entry: {
    index: './src/index.js',
    main: './src/main.js',
    about: './src/about.js', 
},
output: {
  filename: '[chunkhash].bundle.js'
},
target: 'web',
  module: {
    rules: [
       {
        test: /\.js$/,
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
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           {
             loader: 'file-loader',
             options: {
                 name:'[name].[ext]',
                 outputPath: 'assets/img',
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
      chunks: ['index', 'main'],
      excludeChunks: [ 'server' ]
    }),
    new HtmlWebPackPlugin({
      template: "./src/about.html",
      filename: "./about.html",
      chunks: ['index','about'],
      excludeChunks: [ 'server' ]
    }),
    new HtmlWebPackPlugin({
      template: "./src/menu.html",
      filename: "./menu.html",
      chunks: ['index'],
      excludeChunks: [ 'server' ]
    }),
    new HtmlWebPackPlugin({
      template: "./src/cocktails.html",
      filename: "./cocktails.html",
      chunks: ['index'],
      excludeChunks: [ 'server' ]
    }),
    new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      }),
      /* new CopyWebpackPlugin([{
       new CopyWebpackPlugin([{
        from: 'src/images/',
        to: path.resolve(__dirname, 'dist')
      }]), */
           new ImageminPlugin({
        pngquant: {quality: '40-50'},
        plugins: [
          imageminMozjpeg({quality: 50}),
          imageminWebp({autoFilter:true,resize:{width:600,height:0}})]
      })     
  ]
};