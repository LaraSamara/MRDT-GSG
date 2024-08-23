const URL = "https://leetcode.com/problems/min-stack/description/";
var MinStack = function() {
    this.stack = [];
    this.min = [];
};
MinStack.prototype.push = function(val) {
    if(this.stack.length == 0){
        this.stack.push(val);
        this.min.push(val);
        return;
    }
    if(this.min[this.min.length-1] < val){
        this.min.push(this.min[this.min.length-1]);
    }else{
        this.min.push(val);
    }
    this.stack.push(val);
};
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.min.pop();
};
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1];
};
MinStack.prototype.getMin = function() {
    return this.min[this.min.length-1];
};