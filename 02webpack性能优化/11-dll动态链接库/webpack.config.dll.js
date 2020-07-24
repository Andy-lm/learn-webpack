const path = require("path");
const webpack = require("webpack");

module.exports = {
    mode: "production",
    entry: {
        vendors: ["jquery", "lodash"]
    },
    output: {
        filename: "[name].dll.js",
        path: path.resolve(__dirname, "dll"),
        library: "[name]"
    },
    plugins: [
        // 在打包第三方库的时候生成一个清单文件
        new webpack.DllPlugin({
            name: '[name]',
            path: path.resolve(__dirname, 'dll/[name].manifest.json')
        })
    ]

};