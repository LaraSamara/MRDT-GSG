const URL = "https://leetcode.com/problems/sum-of-digits-of-string-after-convert/description";
var getLucky = function(s, k) {
    let numbers = "";
    for(let i = 0 ; i < s.length ; ++i){
        numbers += s.charCodeAt(i) - 'a'.charCodeAt(0) + 1;
    }
    while(k--){
        let sum = 0;
        for(let i = 0 ; i < numbers.length ; ++i){
            sum += Number(numbers[i]);
        }
        numbers = String(sum);
    }
    return Number(numbers);
};