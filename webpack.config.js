const path = require("path");
const webpack = require("webpack");

module.exports = env => {
  return {
    context: __dirname,
    entry: ["./src/index.js"],
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),

      // [Workaround] uncommenting the following line makes HMR work
      // publicPath: "http://localhost:8080/webpack-dev-server-root/",
    },
    mode: "development",
    devtool: "cheap-module-eval-source-map",
    watch: true,
    devServer: {
      host: "localhost",
      port: 8080,
      hot: true,
      overlay: true,
      sockPort: 8080,
      sockHost: "localhost",
      public: "localhost:8080",
      publicPath: "/webpack-dev-server-root/",
      disableHostCheck: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
  };
};
