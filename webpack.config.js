const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/main.js"),
    // bundle:path.resolve(__dirname, 'src/test2.js'),
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
    }),
    new HtmlWebpackPlugin({
      title: "async-race",
      template: path.resolve(__dirname, "./src/templateGarage.html"),
      filename: "garage.html",
    }),
    new HtmlWebpackPlugin({
      title: "async-race",
      template: path.resolve(__dirname, "./src/templateWinners.html"),
      filename: "winners.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
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
