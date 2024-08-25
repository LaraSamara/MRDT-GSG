const URL = "https://leetcode.com/problems/number-of-longest-increasing-subsequence/description/";
var findNumberOfLIS = function(nums) {
    let numOfMax = 0;
    let max = 0;
    const n = nums.length;
    const DP = new Array(n).fill(1); 
    const counts = new Array(n).fill(1); 
    for(let i = n-1 ; i >= 0 ; --i){
        for(let j = i + 1 ; j < n ; ++j){
            if(nums[i] < nums[j]){
                if(DP[j]+1  > DP[i]){
                    DP[i] = DP[j] + 1;
                    counts[i] = 0;
                }
                if(DP[j]+1 === DP[i]){
                    counts[i] += counts[j];
                }
            }
        }
        max = Math.max(max, DP[i]);
    }
    for(let i = 0 ;  i < n ; ++i){
        if(DP[i] === max) numOfMax += counts[i];
    }
    return numOfMax;
};