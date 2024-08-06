function Merge(left,right){
    let result = [];
    let LeftIndex = 0, RightIndex=0;
    while(LeftIndex < left.length && RightIndex < right.length){
        if(left[LeftIndex] < right[RightIndex]){
            result.push(left[LeftIndex++]);
        }else{
            result.push(right[RightIndex++]);
        }
    }
    while(LeftIndex < left.length){
        result.push(left[LeftIndex++]);
    }
    while(RightIndex < right.length){
        result.push(right[RightIndex++]);
    }
    return result;
}
function MergeSort(arr){
    if(arr.length == 1){
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0,mid);
    const right = arr.slice(mid);
    return Merge(MergeSort(left),MergeSort(right));
}
