const path = require("path");
module.exports = {
    /* 
    用来确定打包之前代码与打包之后代码之间的映射关系
    可以用来做错误提示
    */
    devtool: "cheap-module-source-map",
    /* 
    mode:指定打包的模式，有两种
    development是开发环境的包，不会对代码进行压缩
    production是生产环境的包，会对代码进行压缩
     */
    mode: "development", // "production" | "development" 
    // 指定需要打包的文件路径
    entry: "./index.js",
    /* 
    指定打包完成后文件名与存放的文件夹
     */
    output: {
        // 指定打包文件存放的文件夹
        path: path.resolve(__dirname, "bundle"),
        // 指定打包文件名称
        filename: "bundle.js",
    }














}