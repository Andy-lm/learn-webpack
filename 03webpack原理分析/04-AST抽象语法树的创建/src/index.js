import * as parser from "@babel/parser";
import traverse from "@babel/traverse";
import generate from '@babel/generator';
import * as t from "@babel/types";

let code = ``;
let ast = parser.parse(code);
console.log(ast);


// 手动创建let sum = 10 + 66;

const left = t.numericLiteral(88);
const right = t.numericLiteral(66);
const init = t.binaryExpression("+", left, right);
const id = t.identifier("sum");
const declarations = t.variableDeclarator(id, init);
const declaration = t.variableDeclaration("let", [declarations]);
ast.program.body.push(declaration);
const res = generate(ast);
console.log(res.code);