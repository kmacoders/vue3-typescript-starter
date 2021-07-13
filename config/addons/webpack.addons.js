const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

exports.analyze = () => ({
  plugins: [
    new WebpackBundleAnalyzer(),
  ],
})
