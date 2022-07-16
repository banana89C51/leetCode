// ！！！如果是一颗只有右节点的树，耗时、耗空间
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    if (!root) return null;
    const nodeArr = printTree(root);
    return nodeArr.join(' ');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if (!data) return null;
    const nodeArr = data.split(' ');
    return createTreeByArr(nodeArr);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */


function createTreeByArr(arr) {
    if (!arr || !arr.length) return null;
    var arrNode = [];
    arr.map(item => {
        if (item === null || item === '') {
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
    for (var i = 0; i < arrNode.length; i++) {
        if (i > sum) {
            bit++;
            sum += 2 ** bit
        }
        var pos = i - (sum - 2 ** bit) //当前组的第几位
        var leftIndex = sum + 1 + 2 * (pos - 1);
        var rightIndex = leftIndex + 1;
        if (!arrNode[i]) {
            // 补位
            var nullFlag = true;
            for (var k = i + 1; k < arrNode.length; k++) {
                if (arrNode[k] !== null) {
                    nullFlag = false;
                    break;
                }
            }
            if (!nullFlag) {
                leftIndex < arrNode.length && arrNode.splice(leftIndex, 0, null, null);
                continue;
            } else {
                // 剩下的元素都是null
                return arrNode[0];
            }

        };
        arrNode[i].left = leftIndex < arrNode.length ? arrNode[leftIndex] : null;
        arrNode[i].right = rightIndex < arrNode.length ? arrNode[rightIndex] : null;
    }
    return arrNode[0];
}

function printTree(root) {
    if (!root) return [];
    if (!root.left && !root.right) return [root.val];

    var list = [root];
    var list2 = [];
    var res = [];
    var pNode;

    function checkNull(val) {
        return val === null;
    }
    while (list.length || list2.length) {
        if (list.every(checkNull)) break;
        while (list.length) {
            pNode = list.shift();
            pNode ? res.push(pNode.val) : res.push(null);
            pNode && list2.push(pNode.left);
            pNode && list2.push(pNode.right);
        }
        if (list2.every(checkNull)) break;
        while (list2.length) {
            pNode = list2.shift();
            pNode ? res.push(pNode.val) : res.push(null);
            pNode && list.push(pNode.left);
            pNode && list.push(pNode.right);
        }
    }
    return res;
}
const tree = createTreeByArr([2, null, 3, null, 4, null, 5, null, 6]);
console.log(tree);
const str = serialize(tree);
const newtree = deserialize(str);
console.log(newtree);
