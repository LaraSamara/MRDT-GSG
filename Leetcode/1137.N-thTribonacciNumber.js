const URL = "https://leetcode.com/problems/n-th-tribonacci-number/description/";
var tribonacci = function(n) {
    const DP = [0,1,1];
    for(let i = 3 ; i <= n ; ++i){
        DP[i] = DP[i-1] + DP[i-2] + DP[i-3];
    }
    return DP[n];
};