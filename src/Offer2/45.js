
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }

/**
 * @param {TreeNode} root
 * @return {number}
 */
 var findBottomLeftValue = function(root) {
    var maxDeep = 1;
    var res = root;
    function dfs(node, deep){
        if(!node.left && !node.right) {
            if(deep > maxDeep){
                res = node;
                maxDeep = deep;
            }
            return;
        }
        node.left && dfs(node.left, deep + 1);
        node.right && dfs(node.right, deep + 1);
    }
    dfs(root, 1);
    return res;
};
var node1 = new TreeNode(1, null, null);
var node3 = new TreeNode(3, null, null);
var node2 = new TreeNode(2, node1, node3);


findBottomLeftValue(node2);