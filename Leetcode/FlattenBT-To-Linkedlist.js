const URL ="https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description/";
var flatten = function(root) {
    if(!root) return;
    flatten(root.left);
    flatten(root.right);
    const leftSubTree = root.left;
    const rightSubTree = root.right;
    if(leftSubTree){
        root.right = leftSubTree;
        root.left = null;
        let tmp = root.right;
        while(tmp && tmp.right){
            tmp = tmp.right;
        }
        tmp.right = rightSubTree;
    }
};