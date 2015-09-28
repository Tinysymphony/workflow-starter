var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var port = '9000';
var server = '127.0.0.1';
new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    noInfo: false,
    historyApiFallback: true
}).listen(port, server, function(err, result){
    if(err){
        console.log(err);
        return;
    }
    console.log('Start webpack server at port ' + port);
});
