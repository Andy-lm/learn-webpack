// 导入该图片
import icon from "./fox.jpg";
function addImg() {
    let oImg = document.createElement("img");
    oImg.src = icon;
    oImg.setAttribute("class", "size");
    document.body.appendChild(oImg);
}

export { addImg };