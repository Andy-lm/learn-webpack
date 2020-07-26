import * as parser from "@babel/parser";
import traverse from "@babel/traverse";
import generate from '@babel/generator';
import * as t from "@babel/types";

let code = `console.log("lmm");
let sum = 10 + 20;
let minus = 88 - 66;
console.log("webpack study");
`;

let ast = parser.parse(code);
// console.log(ast);
traverse(ast, {
    // enter在遍历到节点的时候调用，并且会传递一个NodePath对象给我们，这个对象中保存了遍历到的节点
    // enter(path) {
    //     console.log(path.node.name);
    // }
    // 还有其他节点类型方法，在遍历到其他节点类型时自动调用
    Identifier(path) {
        // console.log(path.node.name);
        if (path.node.name === "sum") {
            // console.log(path.parentPath);
            // 找sum的父节点并删除
            path.parentPath.remove();
        }
    }
})

let newCode = generate(ast);
console.log(newCode.code);