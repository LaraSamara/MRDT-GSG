const URL = "https://leetcode.com/problems/convert-1d-array-into-2d-array/description";
var construct2DArray = function(original, m, n) {
    let result = new Array();
    if(n*m !== original.length) return [];
    let i = 0;
    while(i < original.length){
        result.push(original.slice(i, i+n));
        i = i + n ;
    }
    return result;
};
// another solution 
var _construct2DArray = function(original, m, n) {
    let result = Array.from({length:m},()=>new Array(n));
    if(n*m !== original.length) return [];
    else if(m === 1) return [original];
    for(let i = 0 ; i < original.length ; i++){
        const row = Math.floor(i/n);
        const col = i % n;
        result[row][col] = original[i];
    }
    return result;
};