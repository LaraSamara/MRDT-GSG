function Partition(arr,left,right){
    let middle = Math.floor( (right + left) / 2 );
    let pivot = arr[middle];
    [arr[middle], arr[right]] = [arr[right], arr[middle]];
    let storeIndex = left;
    for(let i = left ; i < right ; ++i){
        if(arr[i] < pivot){
            [arr[i], arr[storeIndex]] = [arr[storeIndex], arr[i]];
            storeIndex++;
        }
    }
    
    [arr[storeIndex], arr[right]] = [arr[right], arr[storeIndex]];
    return storeIndex;
}

function QuickSort(arr, left, right){
    left = left || 0;
    right = right || arr.length-1;
    if(left < right){
        let pivoteIndex = Partition(arr, left, right);
        QuickSort(arr, left, pivoteIndex-1);
        QuickSort(arr, pivoteIndex+1, right);
    }
    return arr;
}
console.log(QuickSort([3,2,7,4,2,3,6,876,21,24]));
