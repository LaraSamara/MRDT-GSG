const URL = "https://leetcode.com/problems/symmetric-tree/description/";
var isSymmetric = function(root) {
    if(!root) return true;
    return symmetric(root.left, root.right);
};
var symmetric = function(leftRoot, rightRoot){
    if(leftRoot == null && rightRoot == null) return true;
    else if(leftRoot == null || rightRoot == null || leftRoot.val != rightRoot.val) return false;
    return symmetric(leftRoot.left, rightRoot.right) && symmetric(leftRoot.right, rightRoot.left);
}