
// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function createTreeByArr(arr) {
    if (!arr || !arr.length) return null;
    var arrNode = [];
    arr.map(item => {
        if (item === null) {
            arrNode.push(null)
        } else {
            arrNode.push({
                val: item,
                left: null,
                right: null
            })
        }
    });
    var bit = 0;
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (i > sum) {
            bit++;
            sum += 2 ** bit
        }
        if (!arrNode[i]) continue;
        var pos = i - (sum - 2 ** bit) //当前组的第几位
        var leftIndex = sum + 1 + 2 * (pos - 1);
        var rightIndex = leftIndex + 1;
        arrNode[i].left = leftIndex < arr.length ? arrNode[leftIndex] : null;
        arrNode[i].right = rightIndex < arr.length ? arrNode[rightIndex] : null;
    }
    return arrNode[0];
}
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if (!root.left && !root.right) return root;

    var father;
    function preOrder(node) {
        if (father) return;
        if (!node) return false;
        var left = preOrder(node.left);
        if (father) return;
        var right = preOrder(node.right);
        if (father) return;
        var isEqual = [p.val, q.val].indexOf(node.val) !== -1;
        if ((left && isEqual) || (right && isEqual) || (left && right)) {
            father = node;
            return;
        }
        return isEqual ? true : (left || right);
    }
    preOrder(root);
    return father;
};


const tree = createTreeByArr([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
const res = lowestCommonAncestor(tree, { val: 0 }, { val: 5 })
console.log(res);