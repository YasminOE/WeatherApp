const path = require('path');
const common = require('./webpack.config');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const _ = require('lodash'); // Use require instead of import


module.exports = merge(common,{
  mode: 'development',

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },  plugins: [new CleanWebpackPlugin()],

  devServer: {
    contentBase: path.join(__dirname, 'dist'), 
    publicPath: '/', 
    compress: false, 
    open: 'chrome',
    stats: 'errors-only',
    overlay: true,
  },
})