const URL ="https://leetcode.com/problems/implement-queue-using-stacks/description/";
var MyQueue = function () {
    this.stk1 = [];
    this.stk2 = [];
};
MyQueue.prototype.push = function (x) {
    while (this.stk1.length) {
        this.stk2.push(this.stk1[this.stk1.length - 1]);
        this.stk1.pop();
    }
    this.stk1.push(x);
    while (this.stk2.length) {
        this.stk1.push(this.stk2[this.stk2.length - 1]);
        this.stk2.pop();
    }
};
MyQueue.prototype.pop = function () {
    let value = this.stk1[this.stk1.length - 1];
    this.stk1.pop();
    return value;
};
MyQueue.prototype.peek = function () {
    let value = this.stk1[this.stk1.length - 1];
    return value;
};
MyQueue.prototype.empty = function () {
    return this.stk1.length == 0;
};