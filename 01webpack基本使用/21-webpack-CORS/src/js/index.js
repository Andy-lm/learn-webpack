import $ from "jquery";
// 发送请求的地址:http://127.0.0.1:9090/user
// 服务端接收地址:http://127.0.0.1:3000/user
$.get("/user", function (data) {
    console.log(data);
})
$.get("/login", function (data) {
    console.log(data);
})

