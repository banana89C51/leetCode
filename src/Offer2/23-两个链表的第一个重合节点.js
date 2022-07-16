/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return null;
    var p1 = headA;
    var p2 = headB;
    var len1 = 0;
    var len2 = 0;
    // calculate list length
    while(p1 || p2){
        if(p1){
            len1++;
            p1 = p1.next;
        }
        if(p2){
            len2++;
            p2 = p2.next;
        }
    }
    // the longer list n steps ahead
    p1 = headA;
    p2 = headB;
    var n = Math.abs(len1 - len2);
    if(len1 > len2){
        while(n--){
            p1 = p1.next;
        }
    }else{
        while(n--){
            p2 = p2.next;
        }
    }
    // find joint point
    while(p1 && p2 && (p1 != p2)){
        p1 = p1.next;
        p2 = p2.next;
    }
    if(!p1 || !p2) return null;
    return p1;
};
