const path = require('path');
const commonPath = require('./common-path');
const merge = require('webpack-merge');
const parts = require('./parts/webpack.parts');
const modules = require('./parts/webpack.module');
const plugins = require('./parts/webpack.plugin');

const hugCommonConfig = merge([
  { name: 'Svelte TS Starter Kmacoders' },
  { entry: './src/index.ts' },
  { output: { path: commonPath.outputPath, filename: 'build/app.js' } },
  modules.loadBabel(),
  modules.loadTypescript(),
  modules.loadVue(),
  modules.loadScss(),
  parts.commonOptimize(),
  plugins.extractCss({path: commonPath.outputPath, filename: 'build/main.css'}),
  plugins.vueLoaderPlugin(),
  plugins.styleLint(),
  parts.aliasWebpack(),
  parts.statsCommon()
])
// Todo
hugCommonConfig.node = { fs: 'empty'}
module.exports = hugCommonConfig
