"use strict";
/* eslint-disable */
const { resolve }                    = require("path");
const { HotModuleReplacementPlugin } = require("webpack");
const webpackMerge                   = require("webpack-merge");
const baseConfig                     = require("./webpack.base.js");

module.exports = webpackMerge(baseConfig, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",

  // 告诉webpack, 不要打包没有用到的代码,
  // production 模式下, 默认就会过滤没有用到的代码
  // 不需要额外配置, 注意需要再package.json中
  // 排除掉 css/less/scss 不要去 tree-shaking
  optimization: {
    usedExports: true,
  },

  devServer: {
    hot: true,             // 自动更新
    port: 8080,            // 服务端监听端口
    compress: true,        // 压缩
    contentBase: "./dist", // 指定提供内容的目录
    proxy: {               // 请求代理设置
      "^/api": {
        target: "http://localhost:3000/api",
        secure: false,
      },
    },
  },

  plugins: [new HotModuleReplacementPlugin()],
  module: {
    rules: [
      // TODO: 查验vue-cli 创建的项目 eslint/loader 版本
      /* {
        enforce: "pre",
        test: /\.(js|vue)$/,
        exclude: /node_modules/,
        include: resolve(__dirname, "./src"),
        loader: "eslint-loader",
        options: {
          fix: true,
        },
      }, */

      // 处理样式
      {
        test: /\.(c|sc)ss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
});
