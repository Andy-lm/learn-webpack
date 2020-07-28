const path = require("path");

module.exports = {
    devtool: "none",
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "bundle")
    },
    resolveLoader: {
        // 寻找Loader时首先在node_modules寻找，然后再loader目录下
        // modules: ['node_modules', './loader']
        // 给loader配置别名
        alias: {
            ReplaceLoader: path.resolve(__dirname, "./loader/ReplaceLoader.js")
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    // loader: path.resolve(__dirname, "./loader/ReplaceLoader.js"),
                    loader: "ReplaceLoader",
                    options: {
                        name: "----------"
                    }
                }]
            }
        ]
    }
};

