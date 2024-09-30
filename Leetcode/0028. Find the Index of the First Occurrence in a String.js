const URL = "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description";
var strStr = function(haystack, needle) {
    for(let i = 0 ; i <= haystack.length-needle.length; ++i){
        if(haystack[i] === needle[0]){
            if(haystack.slice(i, i+needle.length) === needle) return i;
        }
    }
    return -1;
};