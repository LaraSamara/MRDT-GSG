const URL = "https://leetcode.com/problems/number-of-good-pairs/description/";
function numIdenticalPairs(nums) {
    let count = 0;
    const counter ={};
    for(let num of nums){
        if(!counter[num]){
            counter[num] = 1;
        }else{
            count += counter[num];
            counter[num] += 1;
        }
    }
    return count;
}