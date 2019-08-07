const path = require('path');

const config = {
  devtool: 'source-map',
  entry: {
    app: path.resolve(__dirname, './src/js/app.js')
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist/js/'),
    filename: '[name].bundle.js'
  }
};

module.exports = config;
