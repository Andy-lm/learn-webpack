// 定义一个类作为发布者
class AsyncParallelHook {
    constructor(args) {
        // 定义一个空数组保存订阅信息
        this.tasks = [];
        // 保存将来会给订阅者传递多少参数
        this.args = args;
    }
    tapPromise(tag, task) {
        // 将订阅的回调函数放入空数组中
        this.tasks.push(task);
    }
    promise(...args) {
        // 对参数个数进行校验
        if (args.length < this.args.length) {
            return new Error("参数个数不够");
        }
        args = args.slice(0, this.args.length);
        let [firstTask, ...others] = this.tasks;
        // 将最后一个任务执行完成后的结果(状态resolve())返回出去
        return others.reduce(function (promise, task) {
            return promise.then(() => {
                // task()执行的返回值也会作为参数传递给promise
                return task(...args);
            })
            // firstTask执行的返回值会作为参数传递给promise
        }, firstTask(...args));
    }
}

module.exports = AsyncParallelHook;