const path = require("path");
module.exports = {
    plugins: {
        "autoprefixer": {
            "overrideBrowserslist": [
                "ie >= 8", // 兼容IE7以上浏览器
                "Firefox >= 3.5", // 兼容火狐版本号大于3.5浏览器
                "chrome  >= 35", // 兼容谷歌版本号大于35浏览器,
                "opera >= 11.5" // 兼容欧朋版本号大于11.5浏览器,
            ]
        },
        // "postcss-pxtorem": {
        //     rootValue: 100, // 根元素字体大小
        //     // propList: ['*'] // 可以从px更改到rem的属性
        //     propList: ["height"]
        // }
        "postcss-sprites": {
            // 告诉webpack合并之后的图片保存在什么地方
            spritePath: "./bundle/images",
            // 告诉webpack合并图片如何分组
            groupBy: function (image) {
                let pathName = path.resolve(image.url, "../");
                let dev = pathName.substr(pathName.lastIndexOf("\\") + 1);
                return Promise.resolve(dev);
            },
            // 过滤某些图片，非png格式不合并
            filterBy: function (image) {
                let path = image.url;
                if (!/.png$/.test(path)) {
                    return Promise.reject();
                }
                return Promise.resolve();
            }
        }
    }
};