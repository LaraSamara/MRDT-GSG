const URL = "https://leetcode.com/problems/three-consecutive-odds/description/";
var threeConsecutiveOdds = function(arr) {
    let odd = 0;
    for(const num of arr){
        if(num%2) odd++;
        else odd = 0;
        if(odd === 3) return true;
    }
    return false;
};