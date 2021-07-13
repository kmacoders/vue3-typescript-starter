const path = require('path');
const commonPath = require('./common-path');
const merge = require('webpack-merge');
const parts = require('./parts/webpack.parts');
const modules = require('./parts/webpack.module');
const plugins = require('./parts/webpack.plugin');

const hugCommonConfig = merge([
  { name: 'Vue3 Typescript Starter' },
  { entry: './src/index.ts' },
  {
    output: {
      path: commonPath.outputPath,
      filename: 'build/app.js',
      chunkFilename: 'build/vendors-script.js'
    }
  },
  modules.loadBabel(),
  modules.loadTypescript(),
  modules.loadVue(),
  modules.loadScss(),
  parts.commonOptimize(),
  plugins.extractCss({
    path: commonPath.outputPath,
    filename: 'build/main.css',
    chunkFilename: 'build/vendors-style.css'
  }),
  plugins.vueLoaderPlugin(),
  plugins.styleLint(),
  parts.aliasWebpack(),
  parts.statsCommon()
])
// Todo
hugCommonConfig.node = { fs: 'empty'}
module.exports = hugCommonConfig
