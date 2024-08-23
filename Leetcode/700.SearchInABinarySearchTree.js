const URL = "https://leetcode.com/problems/search-in-a-binary-search-tree/description/";
var searchBST = function(root, val) {
    if(!root) return null;
    else if(root.val > val) return searchBST(root.left, val);
    else if(root.val < val) return searchBST(root.right, val);
    else if(root.val === val) return root;
};