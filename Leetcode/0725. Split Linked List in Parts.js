const URL = "https://leetcode.com/problems/split-linked-list-in-parts/description";
var splitListToParts = function(head, k) {
    let[slow, fast, count] = [head, head, 0];
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        count += 2;
    }
    if(fast && !fast.next) count++;
    const size = Math.floor(count / k);
    let extraSize = count % k;
    const array = Array.from({lenght:k});
    let current = head;
    for(let i = 0 ; i < k ; ++i){
        let partSize = size + (extraSize > 0 ? 1 : 0);
        let partHead = current;
        for(let j = 1 ; j < partSize; ++j){
            if(current) current = current.next;
        }
        if(current){
            let nextPart = current.next;
            current.next = null;
            current = nextPart;
        }
        extraSize--;
        array.push(partHead);
    }
    return array; 
};
