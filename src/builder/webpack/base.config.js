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
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    ],
  },
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      disableDotRule: true,
      rewrites: [
        { from: /./, to: path.join(__dirname, '../../', 'app/public/index.html') }
      ]
    },
    progress: true,
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