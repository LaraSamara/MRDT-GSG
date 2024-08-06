// Using Recursion ==> O(2^n)
function Fibonacci(num){
    if(num == 0 || num == 1) return num;
    return Fibonacci(num-2) + Fibonacci(num-1);
}
// Using Loop & Array ==> O(n)
function fibonacci(num){
    let fib = [0,1];
    for(let i = 2 ; i <= num ; ++i){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib[num];
}