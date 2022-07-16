
// Definition for singly-linked list.
function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    if(!head || (!head.next && n === 1)) return null;
    // calculate list length
    var p = head;
    var len = 0;
    while(p){
        len++;
        p = p.next;
    }
    // find the last node before delete node
    var a = len - n - 1;
    p = head;
    while(a > 0){
        p = p.next;
        a--;
    }
    // delete node 
    if(a < 0) return head.next;
    a = p.next;
    p.next = a.next;
    a.next = null;
    return head;
};
// var node4 = new ListNode(4, null);
// var node3 = new ListNode(3, node4);
var node2 = new ListNode(2, null);
var node1 = new ListNode(1, node2);
removeNthFromEnd(node1,2); 
