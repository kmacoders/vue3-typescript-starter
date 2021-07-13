const commonPath = require('../common-path');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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

exports.loadVue = () => ({
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
          },
        },
      },
    ]
  },
  resolve: {
    extensions: ['.vue', '.ts', '.js', '.json'],
    mainFields: ['vue', 'browser', 'module', 'main']
  }
})
