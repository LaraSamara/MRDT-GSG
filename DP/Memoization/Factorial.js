function Factorial(num,memo = {}){
    if(num <= 1) return 1;
    if(memo[num]) return memo[num];
    memo[num] = num * Factorial(num-1,memo);
    return memo[num];
}