const URL = "https://leetcode.com/problems/maximum-repeating-substring/description/";
var maxRepeating = function(sequence, word) {
    let subString = word;
    let count = 0;
    while(sequence.includes(subString)){
        count++;
        subString += word;
    }
    return count;
};