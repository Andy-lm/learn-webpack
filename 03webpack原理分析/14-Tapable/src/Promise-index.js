// const SyncHook = require("./SyncHook.js"); 
// const SyncBailHook = require("./SyncBailHook"); 
// const SyncWaterfallHook = require("./SyncWaterfallHook"); 
// const SyncLoopHook = require("./SyncLoopHook"); 
// const AsyncParallelHook = require("./AsyncParallelHook");
// const AsyncParallelHook = require("./AsyncParallelHookPromise");
const AsyncSeriesHook = require("./AsyncSeriesHookPromise");
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
        this.index = 0;
    }
    // 异步消息也可以通过tapPromise来订阅，必须返回一个Promise对象，使用resolve代表
    // 通知订阅已经完成
    tap() {
        // 订阅消息
        this.hooks.vue.tapPromise("zs", (args) => {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    console.log("zs", args);
                    resolve();
                }, 3000)
            })
        })
        this.hooks.vue.tapPromise("ls", (args) => {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    console.log("ls", args);
                    // resolve();
                }, 2000)
            })
        })
        this.hooks.vue.tapPromise("ww", (args) => {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    console.log("ww", args);
                    resolve();
                }, 1000)
            })
        })
    }
    // 异步消息通过callAsync来发布
    call() {
        // 发布消息
        this.hooks.vue.promise("您订阅的课程上线啦").then(function () {
            console.log("所有的课程通知已经完成");
        })
    }
}

let ls = new Lesson();

ls.tap();
ls.call();