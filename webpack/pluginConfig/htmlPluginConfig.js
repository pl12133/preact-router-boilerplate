// Configuration object for html-webpack-plugin
var path = require('path');
var moduleRoot = path.resolve(__dirname, '..', '..');

/* The template used in the project is based on:
 * https://github.com/jaketrent/html-webpack-template */

var htmlMinifyConfig = {
  minifyJS: true,
  minifyCSS: true,
  html5: true,
  collapseWhitespace: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true
};

module.exports = {
  cache: true,
  template: path.join(moduleRoot, 'src', 'index.ejs'),
  title: 'Preact Router Boilerplate',
  description: 'A boilerplate showing usage of preact-router',
  appMountId: 'root',
  unsupportedBrowser: false,
  mobile: true,
  useCDN: true,
  inject: false,
  minify: htmlMinifyConfig
};
