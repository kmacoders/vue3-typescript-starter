const merge = require('webpack-merge');
const parts = require('./parts/webpack.parts');
const modules = require('./parts/webpack.module');
const plugins = require('./parts/webpack.plugin');

const hugDevConfig = merge([
  { mode: 'development' },
  { devtool: 'inline-source-map' },
  parts.devServer({port: 5000}),
  plugins.cleanDist(),
  plugins.copyFromPublicToDist(),
  plugins.htmlWebpack(),
  parts.statsDev({excludeAssets: [/.liquid/, /.svg/, /.min.*/, /.png/, /.gif/]}),
]);

module.exports = hugDevConfig;
