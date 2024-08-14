// Example
function CountOccurrences(nums){
    const hash = {};
    for(const num of nums){
        if(!hash[num]){
            hash[num] = 1;
        }else{
            hash[num] += 1;
        }
    }
    for(const value in hash){
        console.log(`value is ${value}, and count of value is ${hash[value]}`);
    }
}
const arr = [1,2,3,4,1,2,3,1,2,1];
CountOccurrences(arr);