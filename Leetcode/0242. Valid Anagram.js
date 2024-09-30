const URL = "https://leetcode.com/problems/valid-anagram/description/";
function isAnagram(s, t) {
    let hash = {};
    if(s.length != t.length) return false;
    for(let i = 0 ; i < s.length ;++i){
        if(!hash[s[i]]){
            hash[s[i]] = 1;
        }else{
            hash[s[i]]++;
        }
        if(!hash[t[i]]){
            hash[t[i]] = -1;
        }else{
            hash[t[i]]--;
        }
    }    
    for(const value in hash){
        if(hash[value] != 0) return false; 
    }
    return true;
    
}