const URL = "https://leetcode.com/problems/kth-missing-positive-number/description/";
var findKthPositive = function(arr, k) {
    let hash = {};
    let count = 0;
    for(let i = 0 ; i < arr.length ; ++i){
        if(!hash[arr[i]]){
            hash[arr[i]] = 1;
        }else{
            hash[arr[i]] += 1;
        }
    }
    for(let i = 1 ; i <= arr.length + k ; ++i){
        if(!hash[i]) count++;
        if(count === k) return i;
    }
};