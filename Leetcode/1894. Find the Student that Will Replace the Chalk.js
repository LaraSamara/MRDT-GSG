const URL = "https://leetcode.com/problems/find-the-student-that-will-replace-the-chalk/description/";
var chalkReplacer = function(chalk, k) {
    let i = 0;
    while(k >= chalk[i]){
        k -= chalk[i];
        if(i === chalk.length-1) i = 0;
        else i++;
    }
    return i;
};

//other solution

var chalkReplacer = function(chalk, k) {
    let totalChalk = 0;
    for(let i = 0 ; i < chalk.length ; i++){
        totalChalk += chalk[i];
    }
    k %= totalChalk;
    for(let i = 0 ; i < chalk.length ; i++){
        if(chalk[i] > k) return i;
        k -= chalk[i];
    }
};
