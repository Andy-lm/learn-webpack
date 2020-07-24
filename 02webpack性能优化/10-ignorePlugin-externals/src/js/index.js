import moment from "moment";
import "moment/locale/zh-cn.js";
moment.locale("zh-cn");
const year = moment("20120620", "YYYYMMDD").fromNow();
console.log(year);