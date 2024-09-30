const URL = "https://leetcode.com/problems/uncommon-words-from-two-sentences/description";
var uncommonFromSentences = function (s1, s2) {
    let [map1, map2, res] = [new Map(), new Map(), new Array()];
    s1.split(" ").forEach(word => {
        map1.set(word, (map1.get(word) || 0) + 1);
    });
    s2.split(" ").forEach(word => {
        map2.set(word, (map2.get(word) || 0) + 1);
    });
    for (const [key, value] of map1) {
        if (value > 1 || map2.has(key)) continue;
        res.push(key);
    }
    for (const [key, value] of map2) {
        if (value > 1 || map1.has(key)) continue;
        res.push(key);
    }
    return res;
};