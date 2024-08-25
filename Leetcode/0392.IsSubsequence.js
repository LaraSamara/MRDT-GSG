const URL = "https://leetcode.com/problems/is-subsequence/description/";
var isSubsequence = function(s, t) {
    if(s.length > t.length) return false;
    let [i,j] = [0,0];
    while(i < s.length && j < t.length){
        if(s[i] === t[j]) i++;
        j++;    
    }
    return i === s.length;
};