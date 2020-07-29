// 定义一个类作为发布者
class AsyncParallelHook {
    constructor(args) {
        // 定义一个空数组保存订阅信息
        this.tasks = [];
        // 保存将来会给订阅者传递多少参数
        this.args = args;
    }
    tapAsync(tag, task) {
        // 将订阅的回调函数放入空数组中
        this.tasks.push(task);
    }
    callAsync(...args) {
        // 对参数个数进行校验
        if (args.length < this.args.length) {
            return new Error("参数个数不够");
        }
        // 因为会传递一个回调函数所以需要+ 1
        args = args.slice(0, this.args.length + 1);
        // 取出最终的回调函数
        let finallTask = args.pop();
        let index = 0;
        // 每次通知完所执行的回调函数
        let callback = () => {
            index++;
            // 当所有任务的回调函数执行完成会执行最终的回调
            if (index === this.tasks.length) {
                finallTask();
            }
        }
        this.tasks.forEach(function (task) {
            // 循环调用通知函数
            // 每次通知完，会执行通知内的回调函数
            task(...args, callback);
        })
    }
}

module.exports = AsyncParallelHook;