const URL = "https://leetcode.com/problems/longest-subarray-with-maximu";
var longestSubarray = function (nums) {
    let [maxLength, currentLength, maxAnd] = [0, 0, Math.max(...nums)];
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] === maxAnd) {
            currentLength++;
        } else {
            currentLength = 0;
        }
        maxLength = Math.max(maxLength, currentLength);
    }
    return maxLength;
};