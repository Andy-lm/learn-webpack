// .eslintrc.js
// https://eslint.org/docs/user-guide/configuring
module.exports = {
  /*
  不重要,永远写true
  * */
  root: true,
  parserOptions: {
    // parser: 'babel-eslint',
    /*
    默认设置为 3，5（默认）， 你可以使用 6、7、8、9 或 10 来指定你想要使用的 ECMAScript 版本
    * */
    "ecmaVersion": 10,
    /*
    设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)。
    * */
    "sourceType": "module",
    /*
    ecmaFeatures - 这是个对象，表示你想使用的额外的语言特性:
    globalReturn - 允许在全局作用域下使用 return 语句
    impliedStrict - 启用全局 strict mode (如果 ecmaVersion 是 5 或更高)
    jsx - 启用 JSX
    * */
    "ecmaFeatures": {}
  },
  // 指定代码运行的宿主环境
  env: {
    browser: true, // 浏览器
    node: true, // node
    /*
    支持 ES6 语法并不意味着同时支持新的 ES6 全局变量或类型（比如 Set 等新类型）。
    对于 ES6 语法，使用 { "parserOptions": { "ecmaVersion": 6 } }
    * */
    es6: true,
  },
  extends: [
      /*
      引入standard代码规范
      * */
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  /*
  扩展或覆盖规则
  * */
  rules: {
    // 强制语句结束添加，分号
    semi: ["error", "always"],
    // 强制缩进2个空格
    indent: ["error", 4],
    // 方法名和刮号之间不加空格
    'space-before-function-paren': ['error', 'never'],
    "no-unexpected-multiline": "off"
  }
};
