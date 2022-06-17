/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
    if (!head) return head; //链表为空
    if (!head.next && head.val != val) return head; //链表只有一个节点 不是val
    if (head.val === val) return head.next; //删除头结点

    var pLast = null;
    var pDel = head;
    // match node
    while (pDel) {
        if (pDel.val === val) break;
        pLast = pDel;
        pDel = pDel.next;
    }
    if (!pDel) return head; //not match 

    // delete node
    pLast.next = pDel.next;
    pDel.next = null;
    return head;
};