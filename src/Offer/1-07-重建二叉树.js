/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (!preorder || !preorder.length) return null;
    return reBuildTree(preorder, inorder, {
        start: 0,
        end: preorder.length - 1
    }, {
        start: 0,
        end: preorder.length - 1
    });
};

var reBuildTree = function (preorder, inorder, preorderIndex, inorderIndex) {
    if (preorderIndex.end === preorderIndex.start) return {
        val: preorder[preorderIndex.start],
        left: null,
        right: null
    };
    const root = preorder[preorderIndex.start]; //找到前序数组的根节点
    // const rootIndex = inorder.findIndex[root]; //如果有重复节点会有问题

    var rootIndex; //根节点在中序数组的位置
    for (var i = inorderIndex.start; i <= inorderIndex.end; i++) {
        if (inorder[i] === root) {
            rootIndex = i;
        }
    }
    if (rootIndex === undefined) return null;
    const leftLen = rootIndex - inorderIndex.start; //左子树数组长度
    const rightLen = inorderIndex.end - rootIndex; //右子树数组长度
    const leftNode = leftLen ? reBuildTree(preorder, inorder, {
        start: preorderIndex
            .start + 1,
        end: preorderIndex
            .start
            + leftLen
    }, { start: inorderIndex.start, end: inorderIndex.start + leftLen - 1 }) : null; //拆分左子树数组
    const rightNode = rightLen ? reBuildTree(preorder, inorder, {
        start: preorderIndex
            .start + 1
            + leftLen,
        end: preorderIndex
            .start
            + leftLen + rightLen
    }, {
        start: inorderIndex.end - rightLen + 1,
        end: inorderIndex.end
    }) : null; //拆分右子树数组

    return {
        val: root,
        left: leftNode,
        right: rightNode
    }
}
// 层序打印二叉树
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

function main() {
    // const order = ['A', 'B', 'D', 'E', 'C', 'F'];
    // const inorder = ['D', 'B', 'E', 'A', 'C', 'F'];
    const order = [3, 9, 20, 15, 7];
    const inorder = [9, 3, 15, 20, 7];
    const root = buildTree(order, inorder);
    console.log(root);
    const res = printTree(root);
    console.log(res);
}
main();