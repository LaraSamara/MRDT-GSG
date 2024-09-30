const URL = "https://leetcode.com/problems/top-k-frequent-words/description/";
var topKFrequent = function(words, k) {
    const result = [];
    const map = new Map();
    const heap = new MaxPriorityQueue();
    for(const word of words){
        if(map.has(word)){
            map.set(word, map.get(word)+1);
        }else{
            map.set(word,1);
        }
    }
    let sorted = Array.from(map).sort((a,b)=>{
        if(a[1] === b[1]) return a[0].localeCompare(b[0]);
        return b[1] - a[1];
    });
    for(let i = 0 ; i < k ; ++i){
        result.push(sorted[i][0]);
    }
    return result;
};