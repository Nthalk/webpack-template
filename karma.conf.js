process.env.DEBUG = 'true';
var webpackConfig = require('./webpack.config');
var path = require('path');

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      './test/sanity_test.js'
    ],
    reporters: ['dots'],
    preprocessors: {
      './test/sanity_test.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
};
