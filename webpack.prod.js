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

    // 分割代码
    splitChunks: {
      chunks: "all"
    },
  },
});
