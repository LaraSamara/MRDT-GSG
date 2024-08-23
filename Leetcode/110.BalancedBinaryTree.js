const URL = "https://leetcode.com/problems/balanced-binary-tree/"; 
var isBalanced = function(root) {
    if(!root) return true;
    let left = height(root.left);
    let right = height(root.right);
    return(Math.abs(left-right) <= 1 && isBalanced(root.left) && isBalanced(root.right));
};
var height = function(root){
    if(!root) return -1;
    return 1 + Math.max(height(root.left), height(root.right));
}
