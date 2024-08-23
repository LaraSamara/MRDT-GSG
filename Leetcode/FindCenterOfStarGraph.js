const URL ="https://leetcode.com/problems/find-center-of-star-graph/description/";
var findCenter = function(edges) {
    let first = [edges[0][0], edges[0][1]];
    let second = [edges[1][0], edges[1][1]];
    if(first[0] == second[0] || first[0] == second[1]) return first[0];
    return first[1];
};