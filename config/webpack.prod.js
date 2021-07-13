const merge = require("webpack-merge");
const parts = require('./parts/webpack.parts');

const hugProdConfig = merge([
  { mode: 'production' },
  parts.prodOptimize(),
])

module.exports = hugProdConfig;
