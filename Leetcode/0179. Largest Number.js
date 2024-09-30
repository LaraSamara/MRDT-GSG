const URL = "https://leetcode.com/problems/largest-number/description";
var largestNumber = function(nums) {
    if(nums.length === 0) return '0';
    nums.sort((a, b) => (`${a}${b}` > `${b}${a}`? -1: 1));
    if(nums[0] === 0) return '0';
    return nums.join('');
};