/**
 * Created by nowgoant on 2015/12/18.
 */
var path = require("path");

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname,'./js/main.js')
    ],
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    }
};