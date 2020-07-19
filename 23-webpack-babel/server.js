let http = require("http");

http.createServer(function (req, res) {
    if (req.url.startsWith("/api/user") && req.method.toLocaleLowerCase() === "get") {
        res.writeHead(200, {
            "Content-Type": "text/plain;charset=utf-8"
        })
        res.end("用户名");
    } else if (req.url.startsWith("/api/login") && req.method.toLocaleLowerCase() === "get") {
        res.writeHead(200, {
            "Content-Type": "text/plain;charset=utf-8"
        })
        res.end("用户登录");
    }
}).listen(3000);