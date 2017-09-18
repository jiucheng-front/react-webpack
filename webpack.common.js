const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 4、提取第三方JS庫
const VENDOR=[
    "react",
    "react-dom"
];

module.exports = {
    entry:{
        app:'./src/entry.js',
        //1.1
        vendor: VENDOR
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: 'app_[chunkhash].js'
        filename:'[name]_[chunkhash].js'
    },
    module: {
        rules: [
            //1.1 解析压缩css,css-loader，
            {
                test: /\.css$/,
                // 6.2 想抽离出来得
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    // use: 'css-loader',
                    use:[{
                        loader: 'css-loader'
                    }]
                })
            },
            { //1.2.SASS的.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
                test: /\.scss$/,
                // 6.2 想抽离出来得
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        "css-loader",
                        "sass-loader"
                    ]
                })
            },
            // 1.3 引入less-loader,编译less
            {
                test:/\.less$/,
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:[
                        "css-loader",
                        "less-loader"
                    ]
                })
            },
            //2 处理图片,图片路径需是相对路径才能看到效果
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }
            },
            //3 编译es6和编译jsx
            {
                test: /(\.jsx|\.js)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin({
            filename: 'app_[hash].css',
            // filename:'app_[chunkhash].css',
            disable: false,
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            title: 'React App',
            abc: '自定义输出',
            filename: 'index.html',
            template: 'webpack.temp.ejs'
        }),
    ]
};