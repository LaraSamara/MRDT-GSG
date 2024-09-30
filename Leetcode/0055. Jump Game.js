const URL = "https://leetcode.com/problems/jump-game/description/";
var canJump = function(nums) {
    let goal = nums.length - 1;
    let i =  goal - 1;
    while(i >= 0 ){
        if(i + nums[i] >= goal) goal = i;
        i--;
    }
    return goal === 0;
};