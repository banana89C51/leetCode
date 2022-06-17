/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    var res = [];
    var list = [root];
    var list2 = [];

    while (list.length || list2.length) {
        while (list.length) {
            var node = list.shift();
            res.push(node.val);
            node.left && list2.push(node.left);
            node.right && list2.push(node.right);
        }
        while (list2.length) {
            var node = list2.shift();
            res.push(node.val);
            node.left && list.push(node.left);
            node.right && list.push(node.right);
        }
    }
    return res;
};