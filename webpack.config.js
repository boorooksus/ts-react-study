const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development", // production (이건 배포할때)
  devtool: "eval", // hidden-source-map (배포할때 - hidden 안하면 개발자모드에서 코드 노출됨 )
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts"],
  },

  entry: {
    app: "./client",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
    ],
  },
  plugins: [],
  output: {
    filename: "app.js",
    path: path.join(__dirname, "dist"),
    publicPath: "/dist",
  },
};
