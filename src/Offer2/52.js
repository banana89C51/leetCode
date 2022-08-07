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
 var increasingBST = function(root) {
     if(!root) return null;
     function inOrder(node){
        if(!node) return null;
        var leftList = inOrder(node.left);
        var rightList = inOrder(node.right);
        leftList && (leftList.tail.right = node);
        rightList && (node.right = rightList.head);
        node.left = null;
        return {
            head: leftList ? leftList.head : node,
            tail: rightList ? rightList.tail : node
        }
    }
    var res = inOrder(root);
    return res.head;
};