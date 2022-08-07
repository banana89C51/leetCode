/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
 var findTarget = function(root, k) {
    if(!root) return false;
    // create map
    var nodeMap = new Map();
    function ceateMap(node){
        nodeMap.set(k - node.val, node);
        node.left && ceateMap(node.left);
        node.right && ceateMap(node.right);
    }
    ceateMap(root);
    // find key
    var res = false;
    function preOrderTree(node){
        if(res) return;
        if(nodeMap.has(node.val) && nodeMap.get(node.val) !== node) {
            res = true;
            return;
        }
        node.left && preOrderTree(node.left);
        node.right && preOrderTree(node.right);
    }
    preOrderTree(root);
    return res;
};