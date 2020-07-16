// 使用两种方法导出数据
import Person, { name as str, age, say } from "./a.js";
// 注意点：第一种方法导出数据属于解构赋值，导入前后名称必须一样，但可以通过as修改
// 第二章方法在导出数据时只能使用一次，但导出数据时名称可以不一样
console.log(str);
console.log(age);
say();
let p = new Person("zs", 85);
console.log(p.name);
console.log(p.age);


