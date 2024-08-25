const URL = "https://leetcode.com/problems/longest-common-subsequence/description/";
var longestCommonSubsequence = function (text1, text2) {
    let n = text1.length;
    let m = text2.length;
    const DP = new Array(n + 1).fill().map(() => new Array(m + 1).fill(0));
    for (let i = 1; i <= n; ++i) {
        for (let j = 1; j <= m; ++j) {
            if (text1[i - 1] === text2[j - 1]) {
                DP[i][j] = 1 + DP[i - 1][j - 1];
            } else {
                DP[i][j] = Math.max(DP[i - 1][j], DP[i][j - 1]);
            }
        }
    }
    return DP[n][m];
};