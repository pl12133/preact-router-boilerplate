const path = require('path');
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.config.base');

module.exports = Object.assign({}, baseWebpackConfig, {
  entry: './src/index',
  output: {
    filename: 'assets/js/bundle.[chunkhash].min.js',
    path: path.join(__dirname, '..', '/build/'),
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      }
    })
  ].concat(baseWebpackConfig.plugins)
});
