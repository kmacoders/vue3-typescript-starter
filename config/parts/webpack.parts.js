const commonPath = require('../common-path');
const path = require('path');
/** Dev */
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

exports.devServer = (options) => ({
  // watch: true,
  devServer: {
    contentBase: commonPath.outputPath,
    compress: true,
    port: options.port,
  },
})

exports.statsDev = (options) => ({
  /**
   * Tells stats whether to add information about the built modules.
   * @see {@link https://webpack.js.org/configuration/stats/}
   */
   stats: {
    excludeAssets: options.excludeAssets,
    modules: false
  },
})

exports.commonOptimize = () => ({
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    splitChunks: {
      cacheGroups: {
          vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              enforce: true,
              chunks: 'all'
          }
      }
    }
  }
})

exports.prodOptimize = () => ({
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  }
})

exports.aliasWebpack = () => ({
  resolve: {
    alias: {
      'vue': '@vue/runtime-dom',
      '@': commonPath.srcPath,
      '@@': commonPath.root
     }
  }
})

exports.statsCommon = () => ({
  stats: {
    entrypoints: false,
    children: false,
  }
})
