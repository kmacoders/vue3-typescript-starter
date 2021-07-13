const commonPath = require('../common-path');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const sveltePreprocess = require("svelte-preprocess");


exports.loadScss = () => ({
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')],
              sourceMap: false,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
            },
          }
        ],
      }
    ]
  }
})

/**
 * Common
 */

exports.loadBabel = () => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          }
        ]
      }
    ]
  }
})

exports.loadTypescript = () => ({
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.svelte$/],
        }
      }
    ]
  }
})

exports.loadSvelte = () => ({
  module: {
    rules: [
      {
        test: /\.(html|svelte)$/,
        use: [
          { loader: "babel-loader" },
          {
            loader: "svelte-loader",
            options: {
              emitCss: true,
              preprocess: sveltePreprocess({})
            },
          },
        ],
      }
    ]
  },
  resolve: {
    extensions: ['.mjs', '.js', '.svelte', '.ts'],
    mainFields: ['svelte', 'browser', 'module', 'main']
  }
})
