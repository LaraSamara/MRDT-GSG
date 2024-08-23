const URL ="https://leetcode.com/problems/number-of-recent-calls/";
var RecentCounter = function() {
    this.queue = [];
};
RecentCounter.prototype.ping = function(t) {
    this.queue.push(t);
    while(this.queue.length && (t-this.queue[0] > 3000)){
        this.queue.shift();
    }
    return this.queue.length;
};
