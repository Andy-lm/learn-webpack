const path = require("path");

module.exports = {
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
    entry: 指定需要打包的文件
    * */
    entry: "./index.js",
    /*
    output: 指定打包之后的文件输出的路径和输出的文件名称
    * */
    output: {
        /*
        filename: 指定打包之后的JS文件的名称
        * */
        filename: "bundle.js",
        /*
        path: 指定打包之后的文件存储到什么地方
        * */
        path: path.resolve(__dirname, "bundle"),
        /* *  
            webpack要将图片进行打包，需要安装儒url-loader加载器，加载器有个默认的设置选项limit：8196，当你的图片大小不超过8kb的时候，打包的时候会生成base64位的图片地址，这种情况下背景图片可以正常显示，当你图片大小超过limit设置的限制时，它会生成一个静态资源图片
            表示在url地址前加上./bundle/
         */
        // publicPath: './bundle/'
    },
    /*
    module: 告诉webpack如何处理webpack不能够识别的文件
    * */
    module: {
        rules: [
            // 打包字体图标相关配置
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
            /*  打包图片相关配置
            使用url-loader进行打包 */
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            // 指定打包后文件名称
                            name: '[name].[ext]',
                            // 指定打包后文件存放目录
                            outputPath: 'images/',
                        }
                    }
                ]
            },
            // 打包CSS文件相关配置
            /* 
            css-loader:   解析css文件中的@import依赖关系
            style-loader: 将webpack处理之后的内容插入到HTML的HEAD代码中
            postcss-loader:为浏览器添加私有前缀
             */
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader",
                        options: {
                            // 开启css打包模块化，只在引入的文件下有效
                            // 打包字体图标时需要将其关闭
                            // modules: true 
                        }
                    },
                    { loader: "postcss-loader" }
                ]
            }
        ]
    }
};