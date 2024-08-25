function Factorial(num){
    const tab = Array.from({length:num+1}).fill(1);
    for(let i = 2 ; i <= num ; ++i){
        tab[i] = i * tab[i-1];
    }
    return tab[num];
}