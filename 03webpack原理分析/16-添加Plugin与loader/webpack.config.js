const path = require("path");
const CleanWebpackPlugin = require('./plugin/clean-webpack-plugin.js');

module.exports = {
    devtool: "none",
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "bundle")
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [{
                    loader: path.resolve(__dirname, "./loader/style-loader.js")
                },
                {
                    loader: path.resolve(__dirname, "./loader/less-loader.js")
                }]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            name: "lmm"
        })
    ]
};