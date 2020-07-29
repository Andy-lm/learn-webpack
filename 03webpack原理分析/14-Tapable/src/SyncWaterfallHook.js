// 定义一个类作为发布者
class SyncWaterfallHook {
    constructor(args) {
        // 定义一个空数组保存订阅信息
        this.tasks = [];
        // 保存将来会给订阅者传递多少参数
        this.args = args;
    }
    tap(tag, task) {
        // 将订阅的回调函数放入空数组中
        this.tasks.push(task);
    }
    call(...args) {
        // 对参数个数进行校验
        if (args.length < this.args.length) {
            return new Error("参数个数不够");
        }
        args = args.slice(0, this.args.length);
        // 遍历任务列表，发送信息
        let [firstTask, ...others] = this.tasks;
        let result = firstTask(...args);
        others.forEach(function (task) {
            result = task(result);
        })
    }
}

module.exports = SyncWaterfallHook;