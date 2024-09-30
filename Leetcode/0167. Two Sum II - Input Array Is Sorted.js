const URL = "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/";
var twoSum = function(numbers, target) {
    let[left, right] = [0, numbers.length-1];
    while(left < right){
        const sum = numbers[left] + numbers[right];
        if(sum > target) right--;
        else if(sum < target) left++;
        else return[left+1, right+1];
    }
    return[-1,-1];
};