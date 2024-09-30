const URL = "https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/";
var getLongestSubsequence = function(words, groups) {
    const ans = [];
    let prev;
    groups.forEach((group,i)=>{
        if(group !== prev){
            ans.push(words[i]);
            prev = group;
        } 
    });
    return ans;
};