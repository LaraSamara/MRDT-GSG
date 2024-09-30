const URL = "https://leetcode.com/problems/roman-to-integer/";
var romanToInt = function (s) {
    const dic = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let val = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if ((s[i] === 'V' || s[i] === 'X') && (i > 0) && (s[i - 1] === 'I') ||
            (s[i] === 'L' || s[i] === 'C') && (i > 0) && (s[i - 1] === 'X') ||
            (s[i] === 'D' || s[i] === 'M') && (i > 0) && (s[i - 1] === 'C')) {
            val += (dic[s[i]] - dic[s[i - 1]]);
            i--;
        } else {
            val += dic[s[i]];
        }
    }
    return val;
};