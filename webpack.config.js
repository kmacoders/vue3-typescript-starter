const merge = require('webpack-merge');
const { mode, analyze } = require('webpack-nano/argv');
const hugCommonConfig = require('./config/webpack.common');
const hugDevConfig = require('./config/webpack.dev');
const hugProdConfig = require('./config/webpack.prod');
const addons = require('./config/addons/webpack.addons');


const development = merge([
  hugDevConfig,
  analyze && addons.analyze(),
])

const production = merge([
  hugProdConfig,
  analyze && addons.analyze(),
])

const getConfig = mode => {
  switch(mode) {
    case 'development':
      return merge([hugCommonConfig, development])
    case 'production':
      return merge([hugCommonConfig, production])
    default:
      throw new Error(`Unknow mode, ${mode}`)
  }

}
module.exports = getConfig(mode);
