const URL = "https://leetcode.com/problems/two-sum/description/"; 
var twoSum = function(nums, target) {
    let hash = {};
    for(let i = 0 ; i < nums.length ; ++i){
        if(hash[target - nums[i]] || hash[target - nums[i]] === 0)
            return [hash[target - nums[i]], i];
        hash[nums[i]] = i;  
    }         
};
