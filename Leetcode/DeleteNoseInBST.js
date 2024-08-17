const URL = "https://leetcode.com/problems/delete-node-in-a-bst/";
var deleteNode = function(root, key) {
    if(!root) return null;
    else if(root.val > key) root.left = deleteNode(root.left, key);
    else if(root.val < key) root.right = deleteNode(root.right, key);
    else{
        if(!root.left && !root.right) return null;
        else if(!root.left) return root.right;
        else if(!root.right) return root.left;
        let successor = findMin(root.right);
        root.val = successor.val;
        root.right = deleteNode(root.right, successor.val);
    }
    return root;
};
var findMin = function(root){
    while(root.left){
        root = root.left;
    }
    return root;
};