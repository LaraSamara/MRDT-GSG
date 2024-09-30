const URL = "https://leetcode.com/problems/two-sum/description/"; 
var twoSum = function(nums, target) {
    let hash = {};
    for(let i = 0 ; i < nums.length ; ++i){
        if(hash[target - nums[i]] || hash[target - nums[i]] === 0)
            return [hash[target - nums[i]], i];
        hash[nums[i]] = i;  
    }         
};
// or native approach 
var _twoSum = function(nums, target) {
    for(let i = 0 ; i < nums.length-1 ; ++i){
        for(let j = i + 1 ; j <nums.length ; ++j){
            if(nums[i] + nums[j] === target) return[i,j];
        }
    }
    return [-1,-1];
};