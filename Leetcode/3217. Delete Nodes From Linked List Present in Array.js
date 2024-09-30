const URL = "https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/description";
var modifiedList = function(nums, head) {
    const set = new Set(nums);
    let dummy = {next:head};
    let prev = dummy;
    let curr = head;
    while(curr){
        if(set.has(curr.val)){
            prev.next = curr.next;
        }else{
            prev = curr;
        }
        curr = curr.next;
    }
    return dummy.next;
};