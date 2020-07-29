const fs = require("fs");
const path = require("path");
class CleanWebpackPlugin {
    constructor(options) {
        console.log("插件被创建了", options);
    }
    apply(complire) {
        // 可以通过complire.options拿到webpack的配置文件
        // console.log(complire.options);
        // complire.hooks保存了所有的发布者
        // console.log(complire.hooks);
        let outputPath = complire.config.output.path;
        complire.hooks.entryOption.tap("CleanWebpackPlugin", () => {
            this.cleanDir(outputPath);
        })
    }
    // 注意点：node.js中不能直接删除非空目录
    cleanDir(dirPath) {
        if (!fs.existsSync(dirPath)) {
            return;
        }
        // 首先判断是否为一个非空目录
        if (fs.statSync(dirPath).isDirectory() && fs.readdirSync(dirPath).length !== 0) {
            let files = fs.readdirSync(dirPath);
            // 如果非空首先删除里面的文件
            files.forEach((file) => {
                let filePath = path.resolve(dirPath, file);
                if (fs.statSync(filePath).isDirectory()) {
                    // 然后清空里面的文件夹
                    this.cleanDir(filePath);
                } else {
                    fs.unlinkSync(filePath);
                }
            })
        }
        fs.rmdirSync(dirPath);
    }
}

module.exports = CleanWebpackPlugin;