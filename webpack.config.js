//模块化思想
//1 启动server webpack-dev-server
//2 模块化开发commonjs
//3 版本号控制 hash或者chunkhash
//4 css，less,sass引入
//5 html自定义模板
//6 抽离css
//7 压缩合并JS
//8 用babel编译es6,需要创建.babelrc文件
//9 external外部配置文件(开发依赖)，例如项目用到jQuery
//10 url-loader处理图片为base64
// "webpack": "^2.2.1"


var webpack = require('webpack');
//4 配置HTML 模板 ,插件
var HtmlWebpackPlugin = require('html-webpack-plugin');
//6 把css抽离
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require("path");

module.exports = {
    //1 配置入口
    entry: './src/entry.js',
    //2 配置出口（打包的输出路径）
    output: {
        path: __dirname + '/build',
        // filename:'app_[hash].js'
        filename: 'app_[chunkhash].js'
    },
    //3 配置服务器
    devServer: {
        // 可指定服务器根目录：src/root 方便本地查看
        // contentBase: path.join(__dirname, "/src/root"),
        inline: true,
        port: 8000,
        // 指定本地电脑的IP作为host,方便同一个局域网手机查看效果
        host: "172.16.9.142",
        proxy: {
            "/api":{
                // 是否需要跨域去请求接口本地测试
                target:"xxx.xx.com",
                changeOrigin:true,
                pathRewrite:{
                "^/api":""
                }
            }
        }
    },
    //4 引入loaders
    module: {
        rules: [
            //4.1 解析压缩css,css-loader，
            {
                test: /\.css$/,
                // 6.2 想抽离出来得
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    // use: 'css-loader',
                    use:[
                      {
                        loader: 'css-loader',
                        // 压缩CSS
                        options:{
                          minimize: true
                        }
                      }
                    ]
                })
            },
            { //4.2.SASS的.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
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
            // 4.3 引入less-loader,编译less
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
            //10 处理图片,图片路径需是相对路径才能看到效果
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }
            },
            //8 编译es6和编译jsx
            {
                test: /(\.jsx|\.js)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
        ]
    },
    //5 配置HTML模板插件
    // 这样 webpack 编译的时候回自动在output目录下生成index.html
    plugins: [
        new HtmlWebpackPlugin({
            //4.1配置参数,html的title
            title: 'React App',
            abc: '自定义输出',
            // 4.2 输出后html的名字，可以自定义
            filename: 'index.html',
            //4.3 html的模板,也可以是xxx.html
            template: 'webpack.temp.ejs'
        }),
        //7 代码优化：合并以及压缩代码
        // 开发环境暂时不需要
        // new webpack.optimize.UglifyJsPlugin({
        //     beautify: false,
        //     //7.1输出不显示警告
        //     compress: {
        //         warnings: false
        //     },
        //     //7.2 输出去掉注释
        //     output: {
        //         comments: false
        //     }
        // }),
        //6.1 css抽离
        new ExtractTextPlugin({
            filename: 'app_[hash].css',
            // filename:'app_[chunkhash].css',
            disable: false,
            allChunks: true
        })
    ]
};
