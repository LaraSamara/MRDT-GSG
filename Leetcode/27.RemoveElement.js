const URL ="https://leetcode.com/problems/remove-element/description/";
var removeElement = function(nums, val) {
    let storeIndex = 0;
    for(let i = 0 ; i < nums.length ; ++i){
        if(nums[i] != val){
            nums[storeIndex++] = nums[i];
        }
    }
    return storeIndex;
};