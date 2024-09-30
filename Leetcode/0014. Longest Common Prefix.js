const URL ="https://leetcode.com/problems/longest-common-prefix/";
var longestCommonPrefix = function(strs) {
    let str = "";
    for(let i = 0 ; i < strs[0].length ; ++i){
        const val = strs[0][i];
        for(let j = 1 ; j < strs.length ; j++){
            if(strs[j][i] != val) return str;
        }
        str += val;
    }
    return str;
};