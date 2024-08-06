
function CountSort(arr){
    let maxNumber = Math.max(...arr);
    let count = new Array(maxNumber+1).fill(0);
    for(let i = 0 ; i < arr.length ; ++i){
        count[arr[i]]++;
    }
    let result = [];
    for(let i = 0 ; i < count.length ; ++i){
        while(count[i] > 0){
            result.push(i);
            count[i] --;
        }
    }
    return result;
}
