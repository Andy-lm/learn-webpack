// const SyncHook = require("./SyncHook.js"); 
// const SyncBailHook = require("./SyncBailHook"); 
// const SyncWaterfallHook = require("./SyncWaterfallHook"); 
// const SyncLoopHook = require("./SyncLoopHook"); 
// const AsyncParallelHook = require("./AsyncParallelHook");
const AsyncSeriesHook = require("./AsyncSeriesHook");
// const { SyncHook } = require("tapable");
// const { SyncBailHook } = require("tapable");
// const { SyncWaterfallHook } = require("tapable");
// const { SyncLoopHook } = require("tapable");
// const { AsyncParallelHook } = require("tapable");
// const { AsyncSeriesHook } = require("tapable");

class Lesson {
    constructor() {
        this.hooks = {
            // 创建一个发布者对象
            vue: new AsyncSeriesHook(["Notification"])

        }
        // this.index = 0;
    }
    // 异步消息要通过tapAsync来订阅
    tap() {
        // 订阅消息
        this.hooks.vue.tapAsync("zs", (args, callback) => {
            setTimeout(function () {
                console.log("zs", args);
                callback();
            }, 3000)
        })
        this.hooks.vue.tapAsync("ls", function (args, callback) {
            setTimeout(function () {
                console.log("ls", args);
                callback();
            }, 2000)
        })
        this.hooks.vue.tapAsync("ww", function (args, callback) {
            setTimeout(function () {
                console.log("ww", args);
                callback();
            }, 1000)
        })
    }
    // 异步消息通过callAsync来发布
    call() {
        // 发布消息
        this.hooks.vue.callAsync("您订阅的课程上线啦", () => {
            // 在所有的课程回调函数执行完成之后才会执行这个函数
            console.log("所有的课程通知已经完成");
        });
    }
}

let ls = new Lesson();

ls.tap();
ls.call();