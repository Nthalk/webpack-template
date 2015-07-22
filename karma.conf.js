process.env.DEBUG = 'true';
process.env.TEST = 'true';

var path = require('path');

module.exports = function (config) {
  config.set({
    basePath: '',
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      'test/*_test.js',
      'test/**/*_test.js'
    ],
    reporters: ['dots'],
    preprocessors: {
      'test/*_test.js': ['webpack'],
      'test/**/*_test.js': ['webpack', 'sourcemap']
    },
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          }
        ]
      }
    },
    webpackMiddleware: {
      noInfo: true
    },
    plugins: [
      "karma-webpack",
      "karma-mocha",
      "karma-chrome-launcher",
      "karma-sourcemap-loader"
    ]
  });
};
