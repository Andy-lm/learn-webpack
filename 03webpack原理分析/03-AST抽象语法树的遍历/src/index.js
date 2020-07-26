import * as parser from "@babel/parser";
import traverse from "@babel/traverse";
import generate from '@babel/generator';


const code = `let sum = 10 + 66;`;
const ast = parser.parse(code);
console.log(ast);

traverse(ast, {
    enter(path) {
        // console.log(path.node.type);
        if (path.node.type === "Identifier") {
            path.node.name = "add";
            path.stop();
        }
    }
});
// console.log(ast);
const res = generate(ast);
console.log(res.code);
