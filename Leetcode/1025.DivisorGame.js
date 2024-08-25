const URL = "https://leetcode.com/problems/divisor-game/description/";
var divisorGame = function(n) {
    const DP = new Array(n+1).fill(false);
    for(let i = 2 ; i <= n ; ++i){
        for(let j = 1 ; j < i ; j++){
            if(i%j === 0 && !DP[i-j]){
                DP[i] = true;
                break;
            }
        }
    }
    return DP[n];
    
};
//another solution
var _divisorGame = function(n){
    return n%2 === 0;
}