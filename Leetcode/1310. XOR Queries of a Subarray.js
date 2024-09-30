const URL = "https://leetcode.com/problems/xor-queries-of-a-subarray/description";
var xorQueries = function(arr, queries) {
    const answer = new Array(queries.length).fill(0);
    for(let i = 1 ; i < arr.length ; ++i){
        arr[i] ^= arr[i-1];
    }
    for(let i = 0 ; i < queries.length ; ++i){
        //answer[i] =  queries[i][0] != 0? arr[queries[i][1]] ^ arr[queries[i][0] - 1]: arr[queries[i][1]];
        if(queries[i][0] != 0){
            answer[i] = arr[queries[i][1]] ^ arr[queries[i][0] - 1];
        }else{
            answer[i] = arr[queries[i][1]];
        }
    }
    return answer;
};