function addContent() {
    let oDiv = document.createElement("div");
    oDiv.innerHTML = "我是内容";
    document.body.appendChild(oDiv);
}

exports.addContent = addContent;