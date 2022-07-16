function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var pruneTree = function(root) {
    function dfs(node){
        if(!node.left && !node.right) return !node.val;
        var left = node.left ? dfs(node.left) : true;
        var right = node.right ? dfs(node.right) : true;
        if(left && node.left) node.left = null;
        if(right && node.right) node.right = null;
        return left && right && !node.val;
    }
    var res = dfs(root);
    if(res) return null 
    else return root
}
var node3 = new TreeNode(0, null, null);
var node4 = new TreeNode(1, null, null);
var node2 = new TreeNode(0, node3, node4);
var node1 = new TreeNode(1, null, node2);
pruneTree(node1);