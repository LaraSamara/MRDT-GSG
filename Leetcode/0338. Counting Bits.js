const URL = "https://leetcode.com/problems/counting-bits/description/";
var countBits = function (n) {
    const out = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; ++i) {
        const val = Math.log2(i);
        if (Math.floor(val) === Math.ceil(val)) {
            out[i] = 1;
        } else {
            const prev = i - Math.pow(2, Math.floor(val));
            out[i] = 1 + out[prev];
        }
    }
    return out;
};
// another solution 
var _countBits = function(n) {
    const out = new Array(n+1).fill(0);
    for(let i = 1 ; i <= n ; ++i ){
        //out[i] = out[i>>1] + (i&1);
        out[i] = out[Math.floor(i/2)] + (i&1);
    }
    return out;
};