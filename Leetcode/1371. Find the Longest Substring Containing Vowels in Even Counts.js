const URL = "https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/description";
var findTheLongestSubstring = function(s) {
    let[BitMask, maxLength, map] = [0, 0, new Map()];
    map.set(0, -1);
    for(let i = 0 ; i < s.length ; ++i){
        if(s[i] === 'a') BitMask ^= (1 << 0);
        else if(s[i] === 'e') BitMask ^= (1 << 1);
        else if(s[i] === 'i') BitMask ^= (1 << 2);
        else if(s[i] === 'o') BitMask ^= (1 << 3);
        else if(s[i] === 'u') BitMask ^= (1 << 4);
        if(map.has(BitMask)){
            maxLength = Math.max(maxLength, i-map.get(BitMask));
        }else{
            map.set(BitMask, i);
        }
    }
    return maxLength;
};