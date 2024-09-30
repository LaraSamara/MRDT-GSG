const URL = "https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/description/";
var pairSum = function (head) {
    const stack = [];
    let [slow, fast] = [head, head];
    let maximum = -(Infinity);
    while (fast) {
        stack.push(slow.val);
        slow = slow.next;
        fast = fast.next.next;
    }
    while (stack.length !== 0 && slow) {
        maximum = Math.max(maximum, stack.pop() + slow.val);
        slow = slow.next;
    }
    return maximum;
};