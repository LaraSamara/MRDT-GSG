const URL = "https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/description/";
var insertGreatestCommonDivisors = function(head) {
    if(!head || !head.next) return head;
    let [slow, fast] = [head, head.next];
    while(fast){
        let node = new ListNode(gcd(slow.val, fast.val));
        node.next = fast;
        slow.next = node;
        slow = fast;
        fast = fast.next;
    }
    return head;
};
var gcd = function (a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}