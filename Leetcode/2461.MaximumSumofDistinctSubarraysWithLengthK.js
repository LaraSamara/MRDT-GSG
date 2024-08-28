const URL ="https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/description/";
var maximumSubarraySum = function(nums, k) {
    let [sum, maxSum, start] = [0, 0, 0];
    let map = new Map();
    for(let end = 0 ; end < nums.length ; ++end){
        while(map.has(nums[end])){
            map.delete(nums[start]);
            sum -= nums[start];
            start++;
        }
        sum += nums[end];
        map.set(nums[end],1);
        if(end-start+1 > k){
            sum -= nums[start];
            map.delete(nums[start]);
            start++;
        }
        if(end-start+1 === k && map.size === k){
            maxSum = Math.max(maxSum, sum);
        }
    }
    return maxSum;
};