const path = require("path");
const webpack = require("webpack");

module.exports = env => {
  return {
    context: __dirname,
    entry: ["./src/index.js"],
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist")
    },
    mode: "development",
    devtool: "cheap-module-eval-source-map",
    watch: true,
    devServer: {
      hot: true,
      overlay: true,
      sockPort: 8080,
      sockHost: "localhost",
      public: "localhost:8080",
      disableHostCheck: true
    }
  };
};
