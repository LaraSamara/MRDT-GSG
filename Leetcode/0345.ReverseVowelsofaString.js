const URL = "https://leetcode.com/problems/reverse-vowels-of-a-string/description/";
var reverseVowels = function(s) {
    let[left, right] = [0, s.length-1];
    const vowel = new Set('aAeEiIoOuU');
    s = s.split("");
    while(left < right){
        if(vowel.has(s[left]) && vowel.has(s[right])){
            [s[left], s[right]] =  [s[right], s[left]];
            left++;
            right--;
        }
        if(!vowel.has(s[left])) left++;
        if(!vowel.has(s[right])) right--;
    }
    return s.join("");
};