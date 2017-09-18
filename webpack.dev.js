 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
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
    }
});