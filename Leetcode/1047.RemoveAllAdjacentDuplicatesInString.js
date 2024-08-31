const URL = "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/description/";
var removeDuplicates = function(s) {
    let stack = [];
    for(let i = 0 ; i < s.length ; ++i){
        if(stack.length !== 0 && stack[stack.length-1] === s[i]){
            stack.pop();
            continue;
        }
        stack.push(s[i]);
    }
    return stack.join('');
};
// OR Two pointers
var _removeDuplicates = function(s) {
    let i = 0;
    s = s.split('');
    for(let j = 0 ; j < s.length ; ++j){
        if(i === 0 || s[i-1] !== s[j]){
            s[i++] = s[j];
        }else{
            i--;
        }
    }
    return s.slice(0, i).join('');
};
