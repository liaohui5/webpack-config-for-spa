"use strict";

const path                   = require("path");
const webpack                = require("webpack");
const { VueLoaderPlugin }    = require("vue-loader");
const HtmlWebpackPlugin      = require("html-webpack-plugin");
const CopyWebpackPlugin      = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
  entry: "./src/main.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  resolve: {
    extensions: [".vue", ".js", ".jsx", ".json"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "~": path.resolve(__dirname, "./src/assets"),
    },
  },

  module: {
    rules: [
      // 处理 vue 
      {
        test: /\.vue$/,
        include: path.resolve(__dirname, "src"),
        use: "vue-loader",
      },

      // 处理 js
      {
        test: /\.js$/,
        exclude: /node_modules/, // 排除 node_modules 目录
        include: path.resolve(__dirname, "src"),
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      chrome: "50",
                    },
                  },
                ],
              ],

              // babel 插件
              plugins: [
                [
                  "@babel/plugin-transform-runtime",
                  {
                    absoluteRuntime: false,
                    corejs: 2, // 不污染全局作用域
                    helpers: true,
                    regenerator: true,
                    useESModules: false,
                  },
                ],
              ],
            },
          },
          /* {
            loader: "eslint-loader",
            options: {
              enforce: "pre",
              fix: true,
            },
          }, */
        ],
      },

      // 处理字体
      {
        test: /\.(eot|json|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              filename: "[name].[ext]",
              outputPath: "fonts",
            },
          },
        ],
      },

      // 处理图片
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[hash].[ext]",
              outputPath: "images/",
              limit: 1024 * 100, // 100k
            },
          },
          {
            // 压缩图片: https://github.com/tcoopman/image-webpack-loader/tree/v6.0.0
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },

      // 处理样式
      {
        test: /\.(c|sc)ss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          "sass-loader",
          "postcss-loader",
        ],
      },
    ],
  },

  plugins: [
    // 处理vue
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false,
    }),

    // 将打包内容插入到html模板插件
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html"),
      minify: {
        collapseWhitespace: true, // 删除空格和换行
        removeComments: true,     // 删除注释
        useShortDoctype: true,    // 使用 html5 的的 doctype
      },
    }),

    // 清除上一次打包结果插件
    new CleanWebpackPlugin(),

    // 复制静态文件插件
    new CopyWebpackPlugin([
      {
        from: "./docs",
        to: "./docs",
      },
    ]),
  ],
};
