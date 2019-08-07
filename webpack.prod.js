const dev = require('./webpack.dev.js');
const merge = require('webpack-merge');
const path = require('path');

const config = merge(dev, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'static/js/')
  }
});

module.exports = config;
