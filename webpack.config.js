//模块化思想,该文件是原先开发和生产环境在一起的。可以作为参考，可以直接作为webpack.config.js，分离之后就是
// dev.js，common.js,prod.js,config.js
//1 启动server webpack-dev-server,自动刷新
//2 模块化开发commonjs
//3 版本号控制 hash或者chunkhash
//4 css，less,sass引入
//5 html自定义模板
//6 抽离css
//7 压缩合并JS
//8 用babel编译es6,需要创建.babelrc文件
//9 url-loader处理图片为base64(不推荐使用会导致CSS过大)
//10 配置venddor,提取公用代碼，如dependencies 下的


var webpack = require('webpack');
const path = require("path");
//4 配置HTML 模板 ,插件
var HtmlWebpackPlugin = require('html-webpack-plugin');
//6.1 把css抽离
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//6、2压缩CSS插件
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');


//10.1 package.json中dependencies的所有项目依赖可以在下面声明
// 如果继续最佳项目依赖得继续在下面写入
const VENOR=[
    "react",
    "react-dom"
];



module.exports = {
    //1 配置入口
    entry:{
        app:'./src/entry.js',
        //10.2
        vendor: VENOR
    },
    //2 配置出口（打包的输出路径）
    output: {
        path: __dirname + '/build',
        // filename: 'app_[chunkhash].js'
        filename:'[name]_[chunkhash].js'
    },
    //3 配置服务器
    devServer: {
        // 可指定服务器根目录：src/root 方便本地查看
        // contentBase: path.join(__dirname, "/src/root"),
        inline: true,
        port: 3000,
        // 指定本地电脑的IP作为host,方便同一个局域网手机查看效果
        host: "172.16.9.142",
        proxy: {
            // 是否需要跨域去请求接口本地测试
            "/api":{
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
                    use:[{
                        loader: 'css-loader'
                      }]
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
        }),
        //6.2 压缩CSS
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),
        //10.3 webpack 自带的插件 CommonsChunkPlugin提取公用JS库代码
        new webpack.optimize.CommonsChunkPlugin({
            // vendor 的意义和之前相同
            // manifest文件是将每次打包都会更改的东西单独提取出来，保证没有更改的代码无需重新打包，这样可以加快打包速度
            names: ['vendor', 'manifest'],
            // 配合 manifest 文件使用
            minChunks: Infinity
        })
    ]
};
