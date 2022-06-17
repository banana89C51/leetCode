/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    if (!head) return null;
    var newHead;
    var newP;
    var p = head;
    // 复制 val 和 next 连接链表
    while (p) {
        var node = new Node(p.val, null, null);
        if (!newHead) newHead = node;
        if (newP) newP.next = node;
        newP = node;
        p = p.next;
    }
    // 复制random
    p = head;
    newP = newHead;
    var searchP = head;
    var newSearchP = newHead;
    while (p) {
        while (searchP !== p.random && searchP) {
            searchP = searchP.next;
            newSearchP = newSearchP.next;
        }
        newP.random = newSearchP;
        p = p.next;
        newP = newP.next;
        searchP = head;
        newSearchP = newHead;
    }
    return newHead;
};


var node7 = new Node(7, null, null);
var node13 = new Node(13, null, null);
var node11 = new Node(11, null, null);
var node10 = new Node(10, null, null);
var node1 = new Node(1, null, null);

node7.next = node13;
node13.next = node11;
node11.next = node10;
node10.next = node1;

node7.random = null;
node13.random = node7;
node11.random = node1;
node10.random = node11;
node1.random = node7;

const newlist = copyRandomList(node7);
console.log(newlist);