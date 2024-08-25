const URL = "https://leetcode.com/problems/climbing-stairs/";
var climbStairs = function(n) {
    const DP = [0,1,2];
    for(let i = 3 ; i <= n ; ++i){
        DP[i] = DP[i-1] + DP[i-2];
    }
    return DP[n];
};