const URL = "";
var removeDuplicates = function(nums) {
    let index = 0;
    let i = 0;
    while(i < nums.length){
        const value = nums[i];
        let j = i;
        while(nums[j] === value){
            if(j-i < 2){
            nums[index++] = nums[j]
            }
                j++;
        }
        i = j;
    }
    return index;
};
// another solution 
var _removeDuplicates = function(nums) {
    let index = 2;
    for(let i = 2 ; i < nums.length ; i++){
        if(nums[i] !== nums[index-1] || nums[i] !== nums[index-2]){
            nums[index++] = nums[i];
        }
    }
    return index;
};