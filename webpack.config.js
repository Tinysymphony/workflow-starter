var webpack = require('webpack');
module.exports = {
  entry: {
    index: [
      'webpack-dev-server/client?http://127.0.0.1:9000',
      'webpack/hot/only-dev-server',
      './src/index.js'
    ]
  },
  output: {
    path: __dirname + '/build',
    publicPath: 'http://127.0.0.1:9000/build',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }, {
      test: /\.css$/,
      loader: 'style!css!autoprefixer'
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }, {
      test: /\.woff$/,
      loader: 'url?limit=100000'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.woff', '.png', '.jpg']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
