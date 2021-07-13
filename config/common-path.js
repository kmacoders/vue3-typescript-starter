const path = require('path');

module.exports = {
  /**
   * Input path
   */
  srcPath: path.resolve(__dirname, '../src'),

  /**
   * Folder path
   */
  componentsPath: path.resolve(__dirname, '../src/components'),
  helpersPath: path.resolve(__dirname, '../src/helpers'),
  stylesPath: path.resolve(__dirname, '../src/styles'),
  typesPath: path.resolve(__dirname, '../src/types'),
  storesPath: path.resolve(__dirname, '../src/stores'),

  /**
   * Output path
   */
  publicPath: path.resolve(__dirname, '../public'),
  outputPath: path.resolve(__dirname, '../dist'),

};
