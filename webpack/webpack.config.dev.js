const path = require('path');
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.config.base');
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || '8080';

module.exports = Object.assign({}, baseWebpackConfig, {
  entry: [
    'webpack-dev-server/client?http://' + host + ':' + port,
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    filename: 'assets/js/bundle.js',
    path: path.join(__dirname, '..', '/build/'),
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ].concat(baseWebpackConfig.plugins),
  devtool: 'source-map'
});
