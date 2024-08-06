function DigitCount(num){
    if(num == 0) return 1;
    return 1 + Math.floor(Math.log10(Math.abs(num)));
}
function MostDigit(arr){
    let maxDigit = 0;
    for(let i = 0 ; i < arr.length ; ++i){
        maxDigit = Math.max(maxDigit,DigitCount(arr[i]));
    }
    return maxDigit;
}
function GetDigit(num,pass){
    return Math.floor(Math.abs(num) / Math.pow(10,pass)) % 10;
}
function RadixSort(arr){
    let maxDigitCount = MostDigit(arr);
    for(let i = 0 ; i < maxDigitCount ; ++i){
        let DigitBucket = Array.from({length:10},() => []);
        for(let j = 0 ; j < arr.length; ++j){
            DigitBucket[GetDigit(arr[j],i)].push(arr[j]);
        }
        arr =[].concat(...DigitBucket);
    }
    return arr;
}