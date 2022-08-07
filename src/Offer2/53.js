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
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
 var inorderSuccessor = function(root, p) {
    if(!root) return null;
    root = increasingBST(root);
    while(root){
        if(root === p) return root.right;
        root = root.right;
    }
    return null;
};

