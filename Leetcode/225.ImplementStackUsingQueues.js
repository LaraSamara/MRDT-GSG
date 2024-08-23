const URL = "https://leetcode.com/problems/implement-stack-using-queues/";
var MyStack = function () {
    this.q1 = [];
    this.q2 = []
};
MyStack.prototype.push = function (x) {
    while (this.q1.length) {
        this.q2.push(this.q1[0]);
        this.q1.shift();
    }
    this.q1.push(x);
    while (this.q2.length) {
        this.q1.push(this.q2[0]);
        this.q2.shift();
    }
};
MyStack.prototype.pop = function () {
    let value = this.q1[0];
    this.q1.shift();
    return value;
};
MyStack.prototype.top = function () {
    let value = this.q1[0];
    return value;
};
MyStack.prototype.empty = function () {
    return this.q1.length == 0;
};
