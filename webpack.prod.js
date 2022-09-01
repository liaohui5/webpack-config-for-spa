"use strict";
const TerserJSPlugin          = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpackMerge            = require('webpack-merge');
const baseConfig              = require('./webpack.base.js');

module.exports = webpackMerge(baseConfig, {
  mode: 'production',
  devtool: 'cheap-module-source-map',

  // 优化压缩选项
  optimization: {
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({}),
    ]
  },
});
