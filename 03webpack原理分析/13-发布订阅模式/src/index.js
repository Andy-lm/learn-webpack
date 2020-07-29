const SyncHook = require("./SyncHook.js");

class Lesson {
    constructor() {
        this.videos = {
            // 创建一个订阅者对象，处理vue的订阅与发布
            vue: new SyncHook(["Notification"]),
            // 创建一个订阅者对象，处理react的订阅与发布
            react: new SyncHook(["Notification"])
        }
    }
    // 课程订阅的方法
    studyVue(name, fn) {
        this.videos.vue.tap(name, fn);
    }
    studyReact(name, fn) {
        this.videos.react.tap(name, fn);
    }
    callVue(...Notification) {
        this.videos.vue.call(...Notification);
    }
    callReact(...Notification) {
        this.videos.react.call(...Notification);
    }
}

let ls = new Lesson();
// 添加学习者的订阅
ls.studyVue("ls", function (str) {
    console.log("ls", str);
})
ls.studyReact("ww", function (str) {
    console.log("ww", str);
})
ls.studyVue("zs", function (str) {
    console.log("zs", str);
})

ls.callVue("您好，Vue课程上线啦");
ls.callReact("您好，React课程上线啦")