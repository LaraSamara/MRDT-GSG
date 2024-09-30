const URL = "https://leetcode.com/problems/count-the-number-of-consistent-strings/description/";
var countConsistentStrings = function(allowed, words) {
    const set = new Set(allowed);
    let count = 0;
    for(let i = 0 ; i < words.length ; ++i){
        for(let j = 0 ; j < words[i].length ; j++){
            if(!set.has(words[i][j])) break;
            if(j === words[i].length-1) count++;
        }
    }
    return count;
};