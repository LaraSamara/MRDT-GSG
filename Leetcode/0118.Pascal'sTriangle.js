var generate = function(numRows) {
    const output = new Array(numRows);
    for(let i = 0 ; i < numRows ; ++i){
        output[i] = new Array(i+1).fill(1);
        if(i >= 2){
            for(let j = 1 ; j < i ; ++j){
                output[i][j] = output[i-1][j-1] + output[i-1][j];
            }
        }
    }
    return output;
};