/**
 * Created by nowgoant on 2015/12/18.
 */
var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

module.exports = {
    entry: path.resolve(__dirname, 'app/main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,

            // There is not need to run the loader through
            // vendors
            // 这里再也不需通过任何第三方来加载
            exclude: [node_modules_dir],
            loader: 'babel'
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }]
    }
};