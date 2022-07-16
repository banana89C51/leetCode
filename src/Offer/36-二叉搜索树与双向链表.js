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
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
    if (!root) return null;
    traversal(root);
    var head = root;
    var tail = root;
    while (head.left) {
        head = head.left
    }
    while (tail.right) {
        tail = tail.right;
    }
    head.left = tail;
    tail.right = head;
    return head;
};
function traversal(node) {
    // if (!node || (!node.left && !node.right)) return;
    if (node.left) {
        traversal(node.left);
        var pLeft = node.left
        while (pLeft.right) {
            pLeft = pLeft.right;
        }
        node.left = pLeft;
        pLeft.right = node;
    }
    if (node.right) {
        traversal(node.right);
        var pRight = node.right;
        while (pRight.left) {
            pRight = pRight.left;
        }
        node.right = pRight;
        pRight.left = node;
    }
}
// const tree = createTreeByArr([4, 2, 5, 1, 3, null, null]);
const tree = createTreeByArr([2, 1]);
const res = treeToDoublyList(tree);
console.log(res);
