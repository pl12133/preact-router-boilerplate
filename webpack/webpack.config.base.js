const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPluginConfig = require('./pluginConfig/htmlPluginConfig');
const autoprefixer = require('autoprefixer');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractedStylesFile = 'assets/css/styles.css';
const ExtractSCSS = new ExtractTextPlugin(extractedStylesFile);

const isProduction = process.env.NODE_ENV === 'production';

// The base webpack configuration, shared in both development and production
module.exports = {
  plugins: [
    new HtmlWebpackPlugin(htmlPluginConfig)
  ].concat(isProduction
    ? [ ExtractSCSS ]
    : []
  ),
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'src']
  },
  module: {
    loaders: [{
      test: /\.scss$/,
      loader: isProduction
        ? ExtractSCSS.extract('style', 'css!postcss!sass')
        : 'style!css!postcss!sass'
    }, {
      test: /\.js(x?)$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=10000&name=assets/images/[name].[ext]'
    }, {
      test: /\.(otf|eot|svg|ttf|woff|woff2)$/,
      loader: 'file?name=assets/fonts/[name].[ext]'
    }
    ]
  },
  postcss: [ autoprefixer({ browsers: ['last 3 versions'] }) ],
  devtool: 'source-map'
};

