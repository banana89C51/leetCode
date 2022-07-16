
 // Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}
 
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    if(!head || !head.next) return null;
    var p1 = head;
    var p2 = head;
    var flag = true;
    while(p1 && p2 && ( p1 !== p2 || flag)){
        flag = false;
        p1 = p1.next;
        p2 = p2.next ? p2.next.next : null;
    }
    if(!p1 || !p2) return null;
    p1 = head;
    while(p1 !== p2){
        p1 = p1.next;
        p2 = p2.next;
    }
    return p1;
};

var node5 = new ListNode(5);
var node4 = new ListNode(4);
var node3 = new ListNode(3);
var node2 = new ListNode(2);
var node1 = new ListNode(1);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = null;
detectCycle(node1);