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
        // result这个数组里保存了所有promise后的回调
        let result = this.tasks.map(function (task) {
            return task(...args);
        })
        // 当所有的Promise都为resolve状态后Promise.all().then()的回调才会执行
        return Promise.all(result);
    }
}

module.exports = AsyncParallelHook;