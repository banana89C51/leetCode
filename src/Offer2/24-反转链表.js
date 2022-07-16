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