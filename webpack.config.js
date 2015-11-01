var webpack = require('webpack');
var ExtractCssPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: {
    index: [
      // 'webpack-dev-server/client?http://127.0.0.1:9000',
      // 'webpack/hot/only-dev-server',
      './src/index.js'
    ],
    render: './src/render.js'
  },
  output: {
    path: __dirname + '/prebuild',
    publicPath: 'prebuild/', //'http://127.0.0.1:9000/build',
    filename: 'js/[name].bundle.js'
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }, {
      test: /\.css$/,
      loader: ExtractCssPlugin.extract('style', 'css!autoprefixer')
    }, {
      test: /\.scss$/,
      loader: ExtractCssPlugin.extract('style', 'css!autoprefixer!sass')
    }, {
      test: /\.woff$/,
      loader: 'url?limit=100000'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'file?name=./img/[name].[ext]'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.woff', '.png', '.jpg', '.scss', '.css']
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractCssPlugin("css/[name].bundle.css", {allChunks: true})
  ],
  stats: {
  }
};
