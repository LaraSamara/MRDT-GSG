const URL = "https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/";
var sortedListToBST = function (head) {
    if (!head) return null;
    else if (!head.next) return new TreeNode(head.val);
    let prev = null;
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    if (prev) {
        prev.next = null;
    }
    let TreeRoot = new TreeNode(slow.val);
    TreeRoot.left = sortedListToBST(head);
    TreeRoot.right = sortedListToBST(slow.next);
    return TreeRoot;
};