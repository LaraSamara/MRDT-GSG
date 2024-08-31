const URL = "https://leetcode.com/problems/container-with-most-water/description/";
var maxArea = function(height) {
    let left = 0;
    let right = height.length-1;
    let maxHeight = 0;
    while(left < right){
        const val = (right-left)*Math.min(height[left],height[right]);
        maxHeight = Math.max(maxHeight, val);
        if(height[left] > height[right]) right--;
        else left++;
    }
    return maxHeight;
};