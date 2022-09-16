"use strict";
const TerserJSPlugin          = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpackMerge            = require('webpack-merge');
const baseConfig              = require('./webpack.base.js');

module.exports = webpackMerge(baseConfig, {
  mode: 'production',
  devtool: 'cheap-module-source-map',

  optimization: {
    // 压缩
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({}),
    ],

    // 分割代码(如果不配置,默认只会分割异步加载的代码)
    // https://v4.webpack.js.org/guides/lazy-loading/#example
    splitChunks: {
      chunks: "all"
    },
  },

  module: {
    rules: [
      // 处理样式
      {
        test: /\.(c|sc)ss$/,
        use: [
          "css-loader",
          "sass-loader",
          "postcss-loader",
        ],
      },
    ]
  }
});
