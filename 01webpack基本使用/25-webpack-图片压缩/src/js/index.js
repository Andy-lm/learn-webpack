import icon from "../images/abc.jpg";
import cssModule from "../css/index.css";

let oImg = document.createElement("img");
oImg.src = icon;
oImg.setAttribute("class", cssModule.size);
document.body.appendChild(oImg);