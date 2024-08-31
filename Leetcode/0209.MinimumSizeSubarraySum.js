const URL = "https://leetcode.com/problems/minimum-size-subarray-sum/";
var minSubArrayLen = function(target, nums) {
    let [start, minimum, sum] = [0, (Infinity), 0];
    for(let end = 0 ; end < nums.length ; end++){
        sum += nums[end];
        while(sum >= target){
            minimum = Math.min(minimum, end-start+1);
            sum -= nums[start];
            start++;
        }
    }
    if(minimum === Infinity) return 0;
    return minimum;
};