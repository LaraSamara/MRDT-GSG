const URL = "https://leetcode.com/problems/majority-element/description/";
var majorityElement = function (nums) {
    const major = Math.floor(nums.length / 2);
    let map = new Map();
    for (let i = 0; i < nums.length; ++i) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 1);
        } else {
            map.set(nums[i], map.get(nums[i]) + 1);
        }
        if (map.get(nums[i]) > major) return nums[i];
    }
};