// 定义一个类作为发布者
class AsyncSeriesHook {
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
        let next = () => {
            if (index === this.tasks.length) {
                finallTask();
                return;
            }
            let task = this.tasks[index];
            /* 使用递归的方法，回调函数相当于next这个方法，
            当回调函数执行时相当于再次执行next方法，由此实现了递归 */
            task(...args, next);
            index++;
        }
        next();
    }
}

module.exports = AsyncSeriesHook;