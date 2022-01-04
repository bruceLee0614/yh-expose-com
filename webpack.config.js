// 导入
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// CleanWebpackPlugin的导入，看版本，之前的版本的默认，不需要加{}
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  // 这里输入输出是一对一的，如果想一对多，多对多请参考 webpack 配置
  // 输入文件：
  entry: [path.resolve(__dirname, "./src/App.tsx")],
  output: {
    path: path.resolve(__dirname, "./lib"),
    filename: "index.js"
  },
  // 识别后缀
  resolve: {
    extensions: [".js", ".jsx", "ts", "tsx"]
  },
  // 插件
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html"
    })
  ],
  // 不同类型文件的模块
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: ["ts-loader"]
    },
    ]
  },
  mode:'production'
};
