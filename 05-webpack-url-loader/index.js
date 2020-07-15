const icon = require("./lmm.jpg");
// file-loader处理之后我们导入图片拿到的是图片打包之后的地址
console.log(icon);

let oImg = document.createElement("img");
oImg.src = icon.default;
document.body.appendChild(oImg);

/*
webpack要将图片进行打包，需要安装儒url-loader加载器，加载器有个默认的设置选项limit：8196，当你的图片大小不超过8kb的时候，打包的时候会生成base64位的图片地址，这种情况下背景图片可以正常显示，当你图片大小超过limit设置的限制时，它会生成一个静态资源图片

// 表示在url地址前加上./bundle/
publicPath: './bundle/'*/