var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

function file(filePath) {
  return path.resolve(__dirname, filePath);
}

var debug = process.env.DEBUG != 'false';
var srcDir = file('src');

module.exports = {
  entry: {
    app: file('src/boot.jsx')
  },
  debug: debug,
  devtool: debug ? 'eval-cheap-module-source-map' : false,
  output: {
    path: file('dist'),
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
      { // Sass
        test: /\.s?css$/,
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
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/[name]-bundle' + (debug ? '' : '-[hash]') + '.js',
      minChunks: function (module, count) {
        return module.resource && module.resource.indexOf(srcDir) === -1;
      }
    }),
    new HtmlWebpackPlugin()
  ].concat(debug ? [] : [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.AggressiveMergingPlugin()
    ])
};
