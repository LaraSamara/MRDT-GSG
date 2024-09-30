const URL = "https://leetcode.com/problems/minimum-bit-flips-to-convert-number/description/";
var minBitFlips = function(start, goal) {
    let count = 0;
    let xor = start ^ goal;
    while(xor){
        count += xor & 1;
        xor >>= 1;
    }
    return count;
};