const URL = "https://leetcode.com/problems/linked-list-in-binary-tree/description";
var isSubPath = function(head, root) {
    if(!root) return false;
    if(helper(head, root)) return true;
    return isSubPath(head, root.left) || isSubPath(head, root.right);
};
const helper = function (head, root){
    if(!head) return true;
    if(!root) return false; 
    if(head.val !== root.val) return false;
    return helper(head.next, root.left) || helper(head.next, root.right);
}
