var webpack = require('webpack');
const merge = require('webpack-merge');
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    plugins: [
        // 1、压缩CSS
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),
        //2、压缩JS
        new UglifyJSPlugin(),
        //4 、提取第三方JS庫，結合common內的vendor
        new webpack.optimize.CommonsChunkPlugin({
            // vendor 的意义和之前相同
            // manifest文件是将每次打包都会更改的东西单独提取出来，保证没有更改的代码无需重新打包，这样可以加快打包速度
            names: ['vendor', 'manifest'],
            // 配合 manifest 文件使用
            minChunks: Infinity
        })
    ]
});