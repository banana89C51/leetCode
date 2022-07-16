/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) return 0;
    function preOrder(node) {
        if (!node) return 0;
        var left = preOrder(node.left) + 1;
        var right = preOrder(node.right) + 1;
        return Math.max(left, right);
    }
    return preOrder(root);
};