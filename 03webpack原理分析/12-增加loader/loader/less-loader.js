const less = require("less");

module.exports = function (source) {
    // let callback = this.async();
    let css = "";
    // 通过less模块的render将less代码转换为css代码
    less.render(source, function (err, obj) {
        css = obj.css;
    })
    return css;
}