const URL = "https://leetcode.com/problems/rotate-array/description";
var rotate = function(nums, k) {
    k %= nums.length;
    if(k === 0) return;
    const part1 = nums.slice(-k);
    const part2 = nums.slice(0, nums.length - k);
    for(let i = 0 ; i < part1.length ; ++i){
        nums[i] = part1[i];
    }
    for(let i = 0 ; i < part2.length ; ++i){
        nums[i+part1.length] = part2[i];
    }
};