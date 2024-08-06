// Using Recursion ==> O(n)
function Factorial(num){
    if(num == 1) return 1;
    return num * Factorial(num-1);
}
// Using Loop ==> O(n)
function factorial(num){
    let fact = 1;
    for(let i = 2 ; i <= num ; ++i){
        fact *= i;
    }
    return fact;
}
