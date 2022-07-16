/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (!root || (!root.left && !root.right)) return true;
    return recursion(root.left, root.right)
};

function recursion(leftNode, rightNode) {
    if (!leftNode && !rightNode) return true;
    if (!leftNode || !rightNode) return false;
    if (leftNode.val !== rightNode.val) return false;
    const res1 = recursion(leftNode.left, rightNode.right);
    const res2 = recursion(leftNode.right, rightNode.left);
    return res1 && res2;
}

const d = {
    val: 'd',
    left: null,
    right: null
}
const c = {
    val: 'c',
    left: null,
    right: null
}
const b1 = {
    val: 'b',
    left: c,
    right: d
}
const b2 = {
    val: 'b',
    left: d,
    right: c
}
const root = {
    val: 'a',
    left: b1,
    right: b2
}

const res = isSymmetric(root);
console.log(res);
