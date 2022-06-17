function inverseTree(root) {
    if (!root || (!root.left && !root.right)) return root;
    return reversal(root);
}
function reversal(node) {
    if (!node) return node;
    // 需要提前记录 不然node.left = reversal(leftNode)会将node.left改变
    const leftNode = node.left;
    const rightNode = node.right;
    node.left = reversal(rightNode);
    node.right = reversal(leftNode);
    return node;
}
const node1 = {
    val: 2,
    left: null,
    right: null
}
const node2 = {
    val: 3,
    left: null,
    right: null
}
const root = {
    val: 1,
    left: node1,
    right: node2
}


const newRoot = inverseTree(root);
console.log(newRoot);



