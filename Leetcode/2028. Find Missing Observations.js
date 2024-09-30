const URL = "https://leetcode.com/problems/find-missing-observations";
var missingRolls = function (rolls, mean, n) {
    const mSum = rolls.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
    const nSum = (mean * (n + rolls.length)) - mSum;
    if (nSum / n > 6 || nSum < n) return [];
    const res = new Array(n).fill(Math.floor(nSum / n));
    let remaining = nSum % n;
    for (let i = 0; i < n && remaining > 0; ++i) {
        const increment = Math.min(6 - res[i], remaining);
        res[i] += increment;
        remaining -= increment;
    }
    return res;
};