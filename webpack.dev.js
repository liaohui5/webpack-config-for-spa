"use strict";

const webpackMerge = require('webpack-merge');
const baseConfig   = require('./webpack.base.js');

module.exports = webpackMerge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',

  devServer: {
    port: 8080,            // 服务端监听端口
    compress: true,        // 压缩
    contentBase: './dist', // 指定提供内容的目录
    proxy: {               // 请求代理设置
      '^/api': {           // 域名后以
        target: 'http://localhost:3000/api',
        secure: false,
      },
    },
  },

  module: {
    rules: [
      /* {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        include: `${__dirname}/src`,
        loader: 'eslint-loader',
        options: {
          fix: true,
        },
      }, */
    ],
  },
});
