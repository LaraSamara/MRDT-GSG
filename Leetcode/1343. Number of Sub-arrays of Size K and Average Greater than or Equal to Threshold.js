const URL = "https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/description/";
var numOfSubarrays = function(arr, k, threshold) {
    let[sum, count, start] = [0, 0 , 0];
    for(let end = 0 ; end < arr.length ; ++end){
        while(end-start+1 > k){
            sum -= arr[start];
            start++;
        }
        sum += arr[end];
        if(end-start+1 === k && sum/k >= threshold){
            count++;
        }
    }
    return count
};