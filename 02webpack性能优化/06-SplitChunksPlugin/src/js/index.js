import $ from "jquery";

$("body").css({
    width: "100%",
    height: "100%",
    background: "red"
})
// const oBtn = document.querySelector("button");
// oBtn.addEventListener("click", function () {
//     const $div = addDiv();
//     $("body").append($div);
// })

// function addDiv() {
//     const $div = $("<div>我是div<div>");
//     return $div;
// }

// const oBtn = document.querySelector("button");
// oBtn.addEventListener("click", function () {
//     addDiv().then(($div) => {
//         document.body.appendChild($div[0]);
//     })

// })

// function addDiv() {
//     return import('jquery').then(({ default: $ }) => {
// const $div = $("<div>我是异步div<div>");
// return $div;
//     });
// }
// async function addDiv() {
//     const { default: $ } = await import("jquery");
//     const $div = $("<div>我是异步div<div>");
//     return $div;
// }