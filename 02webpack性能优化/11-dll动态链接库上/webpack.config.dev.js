const Webpack = require("webpack");
const { merge } = require("webpack-merge");
const CommonConfig = require("./webpack.config.common.js");
module.exports = merge(
    CommonConfig,
    {
        // 告诉webpack只打包用到的JS代码
        optimization: {
            usedExports: true
        },
        /*
        devServer: 自动检测文件变化配置
        * */
        devServer: {
            contentBase: "./bundle",
            open: true,
            port: 9090,
            proxy: [{
                context: ["/user", "/login"],
                target: "http://127.0.0.1:3000",
                changeOrigin: true,     // 域名跨域
                secure: false,          // https跨域
                pathRewrite: { "": "/api" } // 路径重写, 将路径中的api替换为空
            }],
            // 其会和contenthash有冲突，在contenthash开启时需关闭
            // hot: true, // 开启热更新, 只要开启了热更新就不会自动刷新网页了
            // hotOnly: true // 哪怕不支持热更新也不要刷新网页
        },
        /*
        配置sourcemap
        development: cheap-module-eval-source-map
        production: cheap-module-source-map
        * */
        devtool: "cheap-module-eval-source-map",
        /*
        mode: 指定打包的模式, 模式有两种
        一种是开发模式(development): 不会对打包的JS代码进行压缩
        还有一种就是上线(生产)模式(production): 会对打包的JS代码进行压缩
        * */
        mode: "development", // "production" | "development"
        /*
        plugins: 告诉webpack需要新增一些什么样的功能
        * */
        plugins: [
            // new Webpack.HotModuleReplacementPlugin()
        ]
    });
