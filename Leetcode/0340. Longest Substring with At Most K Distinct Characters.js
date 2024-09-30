const URL = "https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/description/"; //premium
// to access it
const problemURL = "https://leetcode.ca/all/340.html";
function lengthOfLongestSubstringKDistinct(s,k){
    const map = new Map();
    let [start, length, maxLength] = [0, 0, 0];
    for(let end = 0 ; end < s.length ; end++){
        while(map.size > k){
            map.set(s[start],map.get(s[start])-1);
            if(map.get(s[start]) === 0) map.delete(s[start]);
            start++;
            length--;
        }
        if(!map.has(s[end])) map.set(s[end],1) ;
        else map.set(s[end],map.get(s[end])+1);
        length++;
        if(map.size === k){
            maxLength = Math.max(maxLength, length);
        }
    }
    return maxLength;
}
console.log(lengthOfLongestSubstringKDistinct("aa", 1));