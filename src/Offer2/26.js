
//   Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    if(!head || head.length === 1) return head;
    var newHead = head;
    head = head.next;
    newHead.next = null;
    var p;
    while(head){
        p = head;
        head = head.next;
        p.next = newHead;
        newHead = p;
    }
    return newHead;
};

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if(!head || !head.next) return head;
    // find insertList
    var len = 0;
    var p = head;
    var n = 0;
    while(p){
        len++;
        p = p.next;
    }
    n = (len % 2) ? (len-1)/2+1 : len/2+1 ;
    // revert insertList
    p = head;
    var pLast = p;
    while(n--){
        pLast = p;
        p = p.next;
    }
    pLast.next = null;
    p = reverseList(p);
    // merge tow lists
    var insertNode= p;
    p = head;
    var pNext;
    while(insertNode){
        pNext = p.next;
        p.next = insertNode;
        insertNode = insertNode.next;
        p.next.next = pNext;
        p = pNext;
    }
    return head;
};
var node5 = new ListNode(5, null);
var node4 = new ListNode(4, node5);
var node3 = new ListNode(3, node4);
var node2 = new ListNode(2, node3);
var node1 = new ListNode(1, node2);
reorderList(node1);