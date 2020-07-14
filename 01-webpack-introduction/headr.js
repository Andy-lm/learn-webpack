function addHeader() {
    let oDiv = document.createElement("div");
    oDiv.innerHTML = "我是头部";
    document.body.appendChild(oDiv);
}

exports.addHeader = addHeader;