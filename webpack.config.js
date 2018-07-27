/*----------------------------------------------*\
  # 1. Required modules
\*----------------------------------------------*/
var path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HTMLWebpackPlugin = require('html-webpack-plugin');



/*----------------------------------------------*\
  # 2. Config Variables
\*----------------------------------------------*/
/* ENTRY FILES */
const entry = './src/index.js',


    /* PLUGINS List */
    plugins = [
        // for js
        // new webpack.optimize.UglifyJsPlugin({
        //     comments: false,
        //     mangle: true,
        //     compress: {
        //         warnings: true
        //     }
        // }),
        
        // for html
        new HTMLWebpackPlugin({
            template: 'index.html'
        })
    ];



/*----------------------------------------------*\
  # 3. Configurations
\*----------------------------------------------*/
module.exports = {
    devtool: 'source-map',
    entry: entry,
    plugins: plugins,
    module: {
        rules: [{
            test: /\.js$/,
            loaders: ['babel-loader'],
            exclude: '/node_modules/'
        }]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: './',
        filename: 'bundle.[hash:12].min.js'
    }
}
