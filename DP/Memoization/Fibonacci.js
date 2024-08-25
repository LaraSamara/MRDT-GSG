function Fibonacci(num,memo = {}){
    if(num == 0 || num == 1) return num;
    else if(memo[num]) return memo[num];
    memo[num] = Fibonacci(num-1) + Fibonacci(num-2);
    return memo[num];
}
