/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];

    var res = [];
    var list1 = [root];
    var list2 = [];
    var arr = [];
    while (list1.length || list2.length) {
        while (list1.length) {
            var node = list1.shift();
            arr.push(node.val);
            node.left && list2.push(node.left);
            node.right && list2.push(node.right);
        }
        arr.length && res.push(arr);
        arr = [];
        while (list2.length) {
            var node = list2.shift();
            arr.push(node.val);
            node.left && list1.push(node.left);
            node.right && list1.push(node.right);
        }
        arr.length && res.push(arr);
        arr = [];
    }
    return res;
};