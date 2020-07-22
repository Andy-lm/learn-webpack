const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const { merge } = require("webpack-merge");
const CommonConfig = require("./webpack.config.common.js");
const glob = require('glob-all');
const PurifyCSSPlugin = require('purifycss-webpack');
const path = require("path");

module.exports = merge(CommonConfig, {
    /*
    optimization: 配置webpack的优化项
    * */
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    /*
    配置sourcemap
    development: cheap-module-eval-source-map
    production: cheap-module-source-map
    * */
    devtool: "cheap-module-source-map",
    /*
    mode: 指定打包的模式, 模式有两种
    一种是开发模式(development): 不会对打包的JS代码进行压缩
    还有一种就是上线(生产)模式(production): 会对打包的JS代码进行压缩
    * */
    mode: "production", // "production" | "development"
    /*
    plugins: 告诉webpack需要新增一些什么样的功能
    * */
    plugins: [
        new HtmlWebpackPlugin({
            // 指定打包的模板, 如果不指定会自动生成一个空的
            template: "./src/index.html",
            minify: {
                // 告诉htmlplugin打包之后的html文件需要压缩
                collapseWhitespace: true,
            }
        }),
        new PurifyCSSPlugin({
            // 告诉PurifyCSSPlugin需要过滤哪些文件
            paths: glob.sync([
                path.join(__dirname, 'src/*.html'),
                path.join(__dirname, 'src/js/*.js')
            ]),
        })
    ]
});
