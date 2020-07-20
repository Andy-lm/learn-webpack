// 使用node方式引入
// const icon = require("./fox.jpg");
// const css = require("./index.css");
// 使用ES6模块化引入
import icon from "./fox.jpg";
import cssModule from "./index.css";
import { addImg } from "./common.js";
console.log(icon);
let oImg = document.createElement("img");
oImg.src = icon;
// oImg.setAttribute("class", "size");
// console.log(size);
oImg.setAttribute("class", cssModule.size);
document.body.appendChild(oImg);
addImg();
