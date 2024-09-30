const URL = "https://leetcode.com/problems/middle-of-the-linked-list/";
var middleNode = function(head) {
    if(!head || !head.next) return head;
    let [slow, fast] = [head, head];
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};