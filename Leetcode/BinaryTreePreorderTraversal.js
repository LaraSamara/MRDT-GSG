const URL = "https://leetcode.com/problems/binary-tree-preorder-traversal/description/";
var preorderTraversal = function(root) {
    if(!root) return [];
    else return PreOrder(root,[]);
};
var PreOrder = function(root, arr){
    if(root == null) return;
    arr.push(root.val);
    PreOrder(root.left, arr);
    PreOrder(root.right, arr);
    return arr;
};