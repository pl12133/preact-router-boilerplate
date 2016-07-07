const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPluginConfig = require('./pluginConfig/htmlPluginConfig');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';
const isProduction = NODE_ENV === 'production';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractedStylesFile = 'assets/css/styles.css';
const ExtractSCSS = new ExtractTextPlugin(extractedStylesFile, {
  allChunks: true,
  disable: !isProduction
});

// The base webpack configuration, shared in both development and production
module.exports = {
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(NODE_ENV)
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new HtmlWebpackPlugin(htmlPluginConfig),
    ExtractSCSS
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'src']
  },
  module: {
    loaders: [{
      test: /\.scss$/,
      loader: ExtractSCSS.extract('style', 'css!postcss!sass')
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

