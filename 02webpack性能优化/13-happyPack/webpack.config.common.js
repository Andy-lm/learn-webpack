const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const fs = require("fs");
const HappyPack = require('happypack');

const plugins = [
    new HtmlWebpackPlugin({
        // 指定打包的模板, 如果不指定会自动生成一个空的
        template: "./src/index.html",
        minify: {
            // 告诉htmlplugin打包之后的html文件需要压缩
            // collapseWhitespace: true,
        }
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
        patterns: [
            { from: './src/test', to: 'test' }
        ],
    }),
    new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.ProvidePlugin({
        $: "jquery" // 表示在全局状态下导入jquery
    }),
    // 告诉webpack在打包moment这个库的时候将locale目录忽视掉
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    // 创建HappyPack插件实现多线程打包
    new HappyPack({
        id: 'js',
        use: [{
            test: /\.js$/,
            exclude: /node_modules/, // 告诉webpack不处理哪一个文件夹
            loader: "babel-loader",
            options: {
                "presets": [["@babel/preset-env", {
                    targets: {
                        // "chrome": "58",
                    },
                    // useBuiltIns: "usage"
                }]],
                "plugins": [
                    ["@babel/plugin-proposal-class-properties"],
                    [
                        "@babel/plugin-transform-runtime",
                        {
                            "absoluteRuntime": false,
                            "corejs": 2,
                            "helpers": true,
                            "regenerator": true,
                            "useESModules": false
                        }
                    ]
                ]
            }
        }]
    })
]
// 动态链接库相关配置
const dllPath = path.join(__dirname, "dll");
const files = fs.readdirSync(dllPath);
files.forEach(function (file) {
    if (file.endsWith(".js")) {
        // 将第三方库引入到html中
        plugins.push(new AddAssetHtmlPlugin({
            filepath: path.resolve(__dirname, "dll", file)
        }))
    } else if (file.endsWith(".json")) {
        // 告诉webpack第三方库的清单，在打包时这些已打包好的库不需要再重复打包
        plugins.push(new webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname, 'dll', file)
        }))
    }
})



module.exports = {
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    // entry: 指定需要打包的文件
    entry: {
        // other: "./src/js/demo.js",
        main: "./src/js/index.js",
    },
    /*
    output: 指定打包之后的文件输出的路径和输出的文件名称
    * */
    output: {
        /*
        filename: 指定打包之后的JS文件的名称
        * */
        filename: "js/[name].[contenthash:8].js",
        /*
        path: 指定打包之后的文件存储到什么地方
        * */
        path: path.resolve(__dirname, "bundle"),
        // publicPath: '../../',
    },
    /*
    module: 告诉webpack如何处理webpack不能够识别的文件
    * */
    module: {
        // 告诉webpack这个库是独立的，不需要去分析，从而提高打包速度
        noParse: /jquery/,
        rules: [
            // 检查代码规范规则ESlint
            // {
            //     // enforce: "pre",让当前loader在其他loader之前执行
            //     enforce: "pre",
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     include: path.resolve(__dirname, "src"),
            //     loader: 'eslint-loader',
            //     options: {
            //         // eslint options (if necessary)
            //         fix: true // 是否帮助我们修复
            //     },
            // },
            // 打包JS规则,使用happyPack多线程打包
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'happypack/loader?id=js'
            },
            // 打包字体图标规则
            {
                test: /\.(eot|json|svg|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            // 指定打包后文件名称
                            name: '[name].[contenthash:8].[ext]',
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
                            name: '[name].[contenthash:8].[ext]',
                            // 指定打包后文件存放目录
                            outputPath: './images/',
                            publicPath: "http://127.0.0.1:9090/images"

                        }
                    },
                    // 用来压缩图片，减少打包后图片大小
                    // 需要通过cnpm下载image-webpack-loader"之后才可以使用
                    // { 
                    //     loader: 'image-webpack-loader',
                    //     options: {
                    //         mozjpeg: {
                    //             progressive: true,
                    //             quality: 65
                    //         },
                    //         // optipng.enabled: false will disable optipng
                    //         optipng: {
                    //             enabled: false,
                    //         },
                    //         pngquant: {
                    //             quality: [0.65, 0.90],
                    //             speed: 4
                    //         },
                    //         gifsicle: {
                    //             interlaced: false,
                    //         },
                    //         // the webp option will enable WEBP
                    //         webp: {
                    //             quality: 75
                    //         }
                    //     }
                    // }
                ]
            },
            {
                test: /\.(htm|html)$/i,
                loader: 'html-withimg-loader'
            },
            // 打包CSS规则
            {
                test: /\.css$/,
                use: [
                    {
                        // loader: "style-loader"
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: true
                        }
                    },
                    {
                        loader: "css-loader",
                        options: {
                            // url: false, // 要禁用 css-loader 解析 url()
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
                // 需要通过cnpm下载node-sass之后才可以使用
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
    plugins: plugins
};