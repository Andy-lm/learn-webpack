// import $ from "jquery";
import "../css/index.css";
import addSpan from "./test";
// // 发送请求的地址:http://127.0.0.1:9090/user
// // 服务端接收地址:http://127.0.0.1:3000/user
// $.get("/user", function (data) {
//     console.log(data);
// })
// $.get("/login", function (data) {
//     console.log(data);
// })
let btn = document.createElement("button");
btn.innerHTML = "添加段落";
document.body.appendChild(btn);

let index = 0;
btn.addEventListener("click", function () {
    let p = document.createElement("p");
    p.innerHTML = "我是第" + index + "段落";
    index++;
    document.body.appendChild(p);
})

addSpan();
// 判断是否开启了热更新插件
if (module.hot) {
    // 告诉热更新，需要监听哪一个JS模块的变化
    module.hot.accept("./test.js", function () {
        let oSpan = document.querySelector("span");
        document.body.removeChild(oSpan);
        addSpan();
    })
}


