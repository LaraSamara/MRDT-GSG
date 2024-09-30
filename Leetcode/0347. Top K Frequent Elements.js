const URL ="https://leetcode.com/problems/top-k-frequent-elements/description/";
var topKFrequent = function(nums, k) {
    let result = [];
    let map = new Map();
    let minHeap = new MinPriorityQueue();
    for(const num of nums){
        if(map.has(num)){
            map.set(num, map.get(num) + 1);
        }else{
            map.set(num,1);
        }
    }
    for(const [key,value] of map){
        minHeap.enqueue(key,value);
        if(minHeap.size() > k){
            minHeap.dequeue();
        }
    } 
    while(minHeap.size() !== 0){
        result.push(minHeap.dequeue().element);
    }
    return result;
};