// 定义一个类作为发布者
class SyncHook {

}
// 创建发布者
let hook = new SyncHook();
// 订阅者添加订阅
hook.tap("zs", function (name, price) {

})
hook.tap("ls", function (name, price) {

})
// 到货之后发布消息
hook.call("法拉利", 88888);