// import $ from "jquery";

// const oBtn = document.querySelector("button");
// oBtn.addEventListener("click", function () {
//     const $div = addDiv();
//     $("body").append($div);
// })

// function addDiv() {
//     const $div = $("<div>我是div<div>");
//     return $div;
// }

const oBtn = document.querySelector("button");
oBtn.addEventListener("click", function () {
    addDiv().then(($div) => {
        document.body.appendChild($div[0]);
    })

})

// function addDiv() {
//     return import('jquery').then(({ default: $ }) => {
// const $div = $("<div>我是异步div<div>");
// return $div;
//     });
// }
async function addDiv() {
    // 魔法注释webpackPrefetch，在空闲的时候加载我们的模块
    const { default: $ } = await import(/* webpackPrefetch: true *//* webpackChunkName: "jquery" */"jquery");
    const $div = $("<div>我是异步div<div>");
    return $div;
}