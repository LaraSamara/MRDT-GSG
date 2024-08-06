const URL = "https://leetcode.com/problems/plus-one/";
var plusOne = function(digits) {
    for(let i = digits.length-1 ; i >= 0 ; --i){
        if(digits[i] < 9){
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    digits[0] = 1;
    digits.push(0);
    return digits;
};