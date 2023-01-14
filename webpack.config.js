const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
// const Common = require('./webpack.common.js')

module.exports = merge({
  mode: 'development',
  experiments: {
    topLevelAwait: true,
  },
  entry: {
    app: path.resolve(__dirname, 'src/main.js'),
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'async-race',
      template: path.resolve(__dirname, './src/template.html'),
      filename: 'index.html',
      chunks: ['app'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    port: 3003,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
})
