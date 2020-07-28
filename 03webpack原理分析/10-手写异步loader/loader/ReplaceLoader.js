const loaderUtils = require("loader-utils");
const validateOptions = require("schema-utils");
// 注意点：
// 1.webpack在使用Loader的时候，会将打包好的内容传递给当前的loader
// 2.webpack在使用Loader的时候，会修改loader中的this，所以在定义loader的时候只能使用ES5的函数
module.exports = function (source) {
    // 可以通过这个Loader获得options中的参数
    let options = loaderUtils.getOptions(this);
    // 制定校验规则
    let schema = {
        type: "object",
        // 指定配置中可以传递的参数
        properties: {
            // 可以传递name参数
            name: {
                // 参数必须为字符型
                type: "string"
            }
        },
        additionalProperties: false
    }
    // 利用校验规则进行校验
    validateOptions(schema, options, "ReplaceLoader");

    let callback = this.async();
    setTimeout(function () {
        source = source.replace(/lmm/g, options.name);
        // 使用异步操作返回数据
        callback(null, source);
        // return source;
    }, 3000);

}