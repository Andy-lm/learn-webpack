const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = {
    /* // 每次在修改代码后不再需要重复打包
    watch: true,
    watchOptions: {
        aggregateTimeout: 200, // 设置防抖，在每次输入完之后才监听变动
        poll: 1000, // 设置每间隔多少秒监听一次变动
        ignored: /node_modules/ // 排除一些文件夹，有些文件不需要监控
    }, */
    devServer: {
        contentBase: "./bundle", // 设置将哪一个目录运行在服务器环境下
        open: true, // 编译打包后是否需要自动在浏览器中打开
        port: 9090, // 指定端口号
        // 写法一：
        /* proxy: {
            // 当我们发送请求到/ user的时候，devServer会自动将地址转换为
            // http://127.0.0.1:3000:/user

            "/user": {
                target: "http://127.0.0.1:3000", // 代理地址
                changeOrigin: true,     // 域名跨域
                secure: false,          // https跨域
            }
        } */
        // 写法二:
        proxy: [{
            context: ["/user", "/login"],
            target: "http://127.0.0.1:3000", // 代理地址
            changeOrigin: true,     // 域名跨域
            secure: false,          // https跨域
            pathRewrite: { "": "/api" } // 路径重写, 将路径中的api替换为空
        }]
    },
    // 注意点：
    /* devServer只能用于解决开发阶段的跨域问题，项目上线后将无法解决，因为上线后的文件夹中
    不再有devServer
     */
    
    // 使其在生产环境中css代码也可以得到压缩
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
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
    mode: "production", // "production" | "development"
    /*
    entry: 指定需要打包的文件
    * */
    entry: "./src/js/index.js",
    /*
    output: 指定打包之后的文件输出的路径和输出的文件名称
    * */
    output: {
        /*
        filename: 指定打包之后的JS文件的名称
        * */
        filename: "js/bundle.js",
        /*
        path: 指定打包之后的文件存储到什么地方
        * */
        path: path.resolve(__dirname, "bundle")
    },
    /*
    module: 告诉webpack如何处理webpack不能够识别的文件
    * */
    module: {
        rules: [
            // 打包字体图标规则
            {
                test: /\.(eot|json|svg|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            // 指定打包后文件名称
                            name: '[name].[ext]',
                            // 指定打包后文件存放目录
                            outputPath: 'font/',
                        }
                    }
                ]
            },
            // 打包图片规则
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 指定图片限制的大小
                            limit: 1024,
                            // 指定打包后文件名称
                            name: '[name].[ext]',
                            // 指定打包后文件存放目录
                            outputPath: 'images/',
                        }
                    }
                ]
            },
            // 打包CSS规则
            {
                test: /\.css$/,
                // use: [ 'style-loader', 'css-loader' ]
                use: [
                    {
                        // style-loader将处理后的内容插入到html的head中
                        // loader: "style-loader"
                        // 将css内容专门打包到一个文件中
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                        options: {
                            // modules: true // 开启CSS模块化
                        }
                    },
                    {
                        loader: "postcss-loader"
                    }
                ]
            },
            // 打包LESS规则
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader"
                }, {
                    loader: "postcss-loader"
                }]
            },
            // 打包SCSS规则
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }, {
                    loader: "postcss-loader"
                }]
            },
        ]
    },
    /*
    plugins: 告诉webpack需要新增一些什么样的功能
    * */
    plugins: [
        // 指定打包的模板, 如果不指定会自动生成一个空的
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            minify: {
                // 告诉htmlplugin打包之后的html文件需要压缩
                collapseWhitespace: true,
            }
        }),
        // 每次在打包前先清空用于打包的目录
        new CleanWebpackPlugin(),
        // 用于将某些文件复制到打包后的文件夹中
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './src/test',
                    to: 'test'
                }
            ]
        }),
        // css-plugin将css内容专门打包到一个包中
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
    ]
};