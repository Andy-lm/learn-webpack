// const SyncHook = require("./SyncHook.js");
// const SyncBailHook = require("./SyncBailHook");
// const SyncWaterfallHook = require("./SyncWaterfallHook");
// const { SyncHook } = require("tapable");
// const { SyncBailHook } = require("tapable");
// const { SyncWaterfallHook } = require("tapable");
const { SyncLoopHook } = require("tapable");
class Lesson {
    constructor() {
        this.hooks = {
            // 创建一个发布者对象
            vue: new SyncLoopHook(["Notification"])

        }
        this.index = 0;
    }
    tap() {
        // 订阅消息
        this.hooks.vue.tap("zs", (args) => {
            console.log("zs", args);
            this.index++;
            return this.index === 3 ? undefined : "";
        })
        this.hooks.vue.tap("ls", function (args) {
            console.log("ls", args);
        })
        this.hooks.vue.tap("ww", function (args) {
            console.log("ww", args);
        })
    }
    call() {
        // 发布消息
        this.hooks.vue.call("您订阅的课程上线啦");
    }
}

let ls = new Lesson();

ls.tap();
ls.call();