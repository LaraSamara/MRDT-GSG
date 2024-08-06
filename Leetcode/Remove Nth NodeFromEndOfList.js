var removeNthFromEnd = function(head, n) {
    var slow = head;
    var fast = head;
    while(n--){
        fast = fast.next;
    }
    if(!fast) {
        var tmp = head;
        head = head.next;
        tmp = null;
        return head;
    }
    while(fast.next){
        slow = slow.next;
        fast = fast.next;
    }
    var tmp = slow;
    slow.next = slow.next.next;
    tmp = null;
    return head;
};