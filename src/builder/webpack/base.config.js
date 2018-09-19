const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '../../', 'app/index.js'),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ],
  },
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    compress: true,
    port: '8081',
    open: true,
    quiet: true, // necessary for FriendlyErrorsPlugin
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'test'
    })
  ]
}