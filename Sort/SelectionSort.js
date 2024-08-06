function SelectionSort(arr){
    let n = arr.length;
    for(let i = 0 ; i < n-1 ; ++i){
        let minIndex = i;
        for(let j = i ; j < n ; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex != i){
            let tmp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = tmp;
        }
    }
    return arr;
}
let arr = [1,4,2,4,8,2,9,5,10,34,1];
console.log(arr);
console.log(SelectionSort(arr));