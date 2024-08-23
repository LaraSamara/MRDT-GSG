const URL = "https://leetcode.com/problems/recover-binary-search-tree/description/";
var recoverTree = function(root) {
    let prev, first, second = null;
    let inOrder = (root)=>{
        if(!root) return;
        inOrder(root.left);
        if(prev && prev.val > root.val){
            if(!first) first = prev;
            second = root;
        }
        prev = root;
        inOrder(root.right);
    }
    inOrder(root);
    if(first && second){
        let tmp = first.val;
        first.val = second.val;
        second.val = tmp;
    }
};