const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/UI.js"),
    app: path.resolve(__dirname, "src/main.js"),
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "async-race",
      template: path.resolve(__dirname, "./src/template.html"),
      filename: "index.html",
      chunks: ['bundle', 'app']
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
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
};
