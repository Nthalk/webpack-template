var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var debug = process.env.DEBUG != 'false';

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/main.jsx'),
    vendor: [
      'react',
      'react-router',
      'geiger',
      'axios',
      'bootstrap/dist/css/bootstrap.css']
  },
  debug: debug,
  devtool: debug ? 'eval-cheap-module-source-map' : false,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name]-bundle' + (debug ? '' : '-[hash]') + '.js',
    pathInfo: true
  },
  module: {
    loaders: [
      { // JSX
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader?optional=runtime'
      },
      { // Css
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      { // Sass
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass")
      },
      { // Image Resources
        test: /\.(jpe?g|png|gif|svg|eot|ttf|woff2|woff)$/i,
        loader: 'url-loader'
      }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', 'css', 'scss']
  },
  plugins: [
    new ExtractTextPlugin("css/[name]-bundle-[hash].css"),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'js/[name]-bundle' + (debug ? '' : '-[hash]') + '.js'),
    new HtmlWebpackPlugin()
  ].concat(debug ? [] : [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.AggressiveMergingPlugin()
    ])
};
