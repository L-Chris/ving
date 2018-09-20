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
    clientLogLevel: 'none',
    historyApiFallback: {
      disableDotRule: true,
      rewrites: [
        { from: /./, to: path.join(__dirname, '../../', 'app/public/index.html') }
      ]
    },
    hot: true,
    host: 'localhost',
    port: '8080',
    open: true,
    quiet: true,
    overlay: { warnings: false, errors: true }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ving',
      template: path.join(__dirname, '../../', 'app/public/index.html')
    })
  ]
}