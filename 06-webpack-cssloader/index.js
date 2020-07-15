const icon = require("./fox.jpg");
const css = require("./index.css");
// file-loader处理之后我们导入图片拿到的是图片打包之后的一个对象
// 只有icon.default才是打包后图片的地址
console.log(icon);

let oImg = document.createElement("img");
oImg.src = icon;
oImg.setAttribute("class", "size");
document.body.appendChild(oImg);
