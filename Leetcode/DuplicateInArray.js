const URL = "https://leetcode.com/problems/two-sum/description/"; 
function findDuplicates(nums) {
    let hash ={};
    let res = [];
    for(const num of nums){
        if(!hash[num]) hash[num] = 1;
        else hash[num]++;
    } 
    for(const value in hash){
        if(hash[value] > 1) res.push(value);
    }
    return res;
}