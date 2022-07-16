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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if(!l1) return l2;
    if(!l2) return l1;
    l1 = reverseList(l1);
    l2 = reverseList(l2);
    var sum, num, newHead, p;
    var add = 0;
    while(l1 || l2){
        sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0)+ add;
        num = sum % 10;
        add = sum >= 10 ? 1 : 0;
        if(!newHead){
            newHead = p = new ListNode(num);
        }else{
            p.next = new ListNode(num);
            p = p.next;
        }
        l1 && (l1 = l1.next);
        l2 && (l2 = l2.next);
    }
    if(add) p.next = new ListNode(1);
    return reverseList(newHead);
};