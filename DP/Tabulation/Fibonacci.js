function Fibonacci(num){
    const tab = [0,1];
    for(let i = 2; i <= num ; ++i){
        tab[i] = tab[i-1] + tab[i-2];
    }
    return tab[num];
}