const commonPath = require('../common-path');
const path = require('path');
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader')
const StyleLintPlugin = require('stylelint-webpack-plugin');

exports.cleanDist = () => ({
  plugins: [new CleanWebpackPlugin()]
})

exports.copyFromPublicToDist = () => ({
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: `${commonPath.publicPath}/json`, to: `${commonPath.outputPath}` },
      ],
    })
  ]
})

exports.htmlWebpack = () => ({
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Vue 3 Typescript',
      filename: 'index.html',
      template: path.resolve(__dirname, commonPath.publicPath, 'templates/index.ejs'),
    })
  ]
})

exports.extractCss = (options) => ({
  plugins: [
    new MiniCssExtractPlugin({
      path: options.path,
      filename: options.filename,
      chunkFilename: options.chunkFilename
    })
  ]
})

exports.vueLoaderPlugin = () => ({
  plugins: [new VueLoaderPlugin()]
})

exports.buildFeatureFlags = () => ({
  plugins: [
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: 'true',
      __VUE_PROD_DEVTOOLS__: 'false'
    })
  ]
})

exports.styleLint = () => ({
  plugins: [
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: 'src',
      files: '**/*.(s(c|a)ss|css)',
      failOnError: false,
      quiet: false,
      emitErrors: true
    })
  ]
})
