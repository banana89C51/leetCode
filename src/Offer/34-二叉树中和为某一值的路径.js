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
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
    if (!root) return [];
    const arr = preOrder(root, target);
    var res = [];
    arr.map(item => {
        if (item.sum === target) {
            res.push(item.arr.reverse());
        }
    });
    return res;
};

function preOrder(node, target) {
    if (!node) return null;
    const left = preOrder(node.left, target);
    const right = preOrder(node.right, target);
    // 叶子节点
    if (!left && !right) return [{
        arr: [node.val],
        sum: node.val
    }];
    var res = [];
    left && left.map(item => {
        item.arr.push(node.val);
        item.sum += node.val;
        res.push(item);
    });
    right && right.map(item => {
        item.arr.push(node.val);
        item.sum += node.val;
        res.push(item);
    });
    return res;
}

const tree = createTreeByArr([1, -2, -3, 1, 3, -2, null, -1]);
const res = pathSum(tree, -1);
console.log(res);

