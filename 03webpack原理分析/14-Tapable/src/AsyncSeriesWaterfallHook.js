// 定义一个类作为发布者
class AsyncSeriesWaterfallHook {
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
        args = args.slice(0, this.args.length + 1);
        let finallTask = args.pop();
        let index = 0;
        let next = (error, ...data) => {
            let task = this.tasks[index];
            if (!task) {
                finallTask();
                return;
            }
            if (index === 0) {
                task(...args, next);
            } else {
                if (error) {
                    finallTask();
                } else {
                    task(...data, next);
                }
            }
            index++;

        }
        next();
    }
}

module.exports = AsyncSeriesWaterfallHook;