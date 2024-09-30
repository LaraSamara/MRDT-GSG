const URL = "https://leetcode.com/problems/linked-list-cycle-ii/description/";
var detectCycle = function(head) {
    if(!head || !head.next) return null;
    let[slow, fast] = [head, head];
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(!fast || !fast.next) return null;
        if(slow === fast) break;
    }
    while(head !== slow){
        head = head.next;
        slow = slow.next;
    }
    return head;
};