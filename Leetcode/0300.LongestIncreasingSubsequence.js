const URL = "https://leetcode.com/problems/longest-increasing-subsequence/description/";
var lengthOfLIS = function(nums) {
    const n = nums.length;
    const DP = new Array(n).fill(1);
    let res = 1;
    for(let i = n-2 ; i >= 0 ; --i){
        for(let j = i+1 ; j < n ; ++j){
            if(nums[i] < nums[j]){
                DP[i] = Math.max(DP[i],1 + DP[j]);
            }
        }
        res = Math.max(res, DP[i]);
    }
    return res;
};