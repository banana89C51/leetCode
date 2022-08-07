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
 * @return {TreeNode}
 */
 var convertBST = function(root) {
    if(!root) return null;
    var curSum = 0;
    // right-root-left
    function myOrder(node){
        if(!node) return;
        myOrder(node.right);
        node.val +=curSum;
        curSum = node.val;
        myOrder(node.left);
    }
    myOrder(root);
    return root;
};