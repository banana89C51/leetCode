
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if(!head || !head.next) return head;
    var p = head;
    var len = 0;
    while(p){
        len++;
        p = p.next;
    }
    function merger(pNode, len){
        if(len === 1){
            return pNode;
        }
        var p = pNode;
        var num = Math.floor(len / 2);
        while(--num) p = p.next;
        var p2 = p;
        p = p.next;
        p2.next = null;
        var l1 = merger(pNode, Math.floor(len / 2));
        var l2 = merger(p, len - Math.floor(len / 2));
        return mergeTwoList(l1, l2);
    }
    return merger(head, len);
};
// 合并两个升序列表
function mergeTwoList(l1, l2){
    var p1 = l1;
    var p2 = l2;
    var pHead;
    var pTail;
    var p;
    var pLast;
    var flag;
    while(p1 && p2){
        p = p1;
        flag = false;
        while(p1 && p1.val <= p2.val){
            flag = true;
            pLast = p1;
            p1 = p1.next;
        }
        if(flag){
            if(!pHead) pHead = p;
            pTail ? (pTail.next = p) : (pTail = p);
            pLast.next = null;
            pTail = pLast;
            flag = false;
        }
        if(!p1 || !p2) break;
        p = p2;
        while(p2 && p1.val > p2.val){
            flag = true;
            pLast = p2;
            p2 = p2.next;
        }
        if(flag){
            if(!pHead) pHead = p;
            pTail ? (pTail.next = p) : (pTail = p);
            pLast.next = null;
            pTail = pLast;
            flag = false;
        }   
    }
    if(p1){
        pTail.next = p1;
    }
    if(p2){
        pTail.next = p2;
    }
    return pHead;
}

var node3 = new ListNode(3, null);
// var node1 = new ListNode(1, node3);
// var node5 = new ListNode(5, node1);
// var node4 = new ListNode(4, node5);
// var node2 = new ListNode(2, node4);
// var node22 = new ListNode(2, node2);
// var node4 = new ListNode(4, node22);

var head = sortList(node3);
