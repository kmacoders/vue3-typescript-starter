const path = require('path');

module.exports = {
  root: path.resolve(),

  /**
   * Input path
   */
  srcPath: path.resolve(__dirname, '../src'),

  /**
   * Output path
   */
  publicPath: path.resolve(__dirname, '../public'),
  outputPath: path.resolve(__dirname, '../dist'),

};
