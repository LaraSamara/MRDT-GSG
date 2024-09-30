const URL = "https://leetcode.com/problems/minimum-time-difference/description";
// USING BUCKET SORT    
var findMinDifference = function(timePoints) {
    // convert time to minutes
    const timeToMinutes = (time)=>{
        const[h, m] = time.split(":").map(Number);
        return 60 * h + m;
    }
    const MAX_MINUTES = 60 * 24;
    // if the length of timePoints greater than MAX_MINUTES, there must a duplicate
    if(timePoints.length > MAX_MINUTES) return 0;
    const bucket = new Array(MAX_MINUTES).fill(false);
    // convert the time into minutes and allocate it in right position in bucket 
    for(let i = 0 ; i < timePoints.length ; ++i){
        const time = timeToMinutes(timePoints[i]);
        if(bucket[time]) return 0;
        bucket[time] = true;
    }
    // find the difference
    let[first, last, minDiff] = [-1, -1, Infinity];
    for(let i = 0 ; i < bucket.length ; ++i){
        if(bucket[i]){
            if(first === -1){
                first = i;
            }else{
                minDiff = Math.min(minDiff, i - last)
            }
            last = i;
        }
    }
    minDiff = Math.min(minDiff, MAX_MINUTES - last + first);
    return minDiff;
};
// USING SORT WITH O(N * log N)
var _findMinDifference = function(timePoints) {
    const minites = timePoints.map(time =>{
        const[h, m] = time.split(":").map(Number);
        return h * 60 + m;
    });
    minites.sort((a, b) => a-b);
    let minDiff = Infinity;
    for(let i = 0 ; i < minites.length - 1 ; ++i){
        minDiff = Math.min(minDiff, minites[i + 1] - minites[i]);
    }
    minDiff = Math.min(minDiff, 24 * 60 - minites[minites.length - 1] +  minites[0]);
    return minDiff;
};
