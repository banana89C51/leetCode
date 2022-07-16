
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var sumNumbers = function(root) {
    if(!root) return 0;
    var num = [];
    var res = 0;
    function dfs(node){
        num.push(node.val);
        if(!node.left && !node.right) {
            res+=Number(num.join(''));
            num.pop();
            return;
        }
        node.left && dfs(node.left);
        node.right && dfs(node.right);
        num.pop();
    }
    dfs(root);
    return res;
};

var node5 = new TreeNode(5, null, null);
var node1 = new TreeNode(1, null, null);
var node9 = new TreeNode(9, node5, node1);
var node0 = new TreeNode(0, null, null);
var node4 = new TreeNode(4, node9, node0);
// 495 + 491 + 40  = 1026
sumNumbers(node4);