const URL = "https://leetcode.com/problems/pascals-triangle-ii/";
var getRow = function(rowIndex) {
    const output = new Array(rowIndex+1);
    for(let i = 0 ; i  <= rowIndex ; ++i){
        output[i] = new Array(i+1).fill(1);
        if(i >= 2){
            for(let j = 1 ; j < i ; j++){
                output[i][j] = output[i-1][j-1] + output[i-1][j];
            }
        }
    }
    return output[rowIndex];
};