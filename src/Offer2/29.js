// Definition for a Node.
function Node(val, next) {
    this.val = val;
    this.next = next;
};

/**
* @param {Node} head
* @param {number} insertVal
* @return {Node}
*/
var insert = function(head, insertVal) {
    var node = new Node(insertVal, null);
    // list is null
    if(!head) {
        node.next = node;
        return node;
    };
    // list has one node 
    if(head.next === head){
        head.next = node;
        node.next = head;
        return head;
    }
    // list has two nodes 
    if(head.next.next === head){
        head.next.next = node;
        node.next = head;
        return head;
    }
    // list has three nodes at least
    var p = head.next;
    var pFather = head;
    var pGrandpa = pFather;
    var dirctFlag = pFather.val <= p.val ? 1 : 0; //1:递增  0:递减
    while(1){
        pGrandpa = pFather;
        pFather = p;
        p = p.next;
        if(pFather.val <= p.val){// 递增   
            if(dirctFlag){
                if(pFather.val<=insertVal && p.val >= insertVal){
                    pFather.next = node;
                    node.next = p;
                    return head;
                }
                continue;
            }else{
                dirctFlag = 1;
                if(insertVal <= pFather.val){
                    pGrandpa.next = node;
                    node.next = pFather;
                    return head
                }
                if(insertVal <= p.val){
                    pFather.next = node;
                    node.next = p;
                    return head
                }
            }
        }else{// 递减（之前一定是递增）
            dirctFlag = 0;
            if(insertVal >= pFather.val || insertVal <= p.val){
                pFather.next = node;
                node.next = p;
                return head;
            }
        }
    }
};
var node4 = new Node(4, null);
var node3 = new Node(3, node4);
var node1 = new Node(1, node3);
node4.next = node1;

// var node2 = new Node(2, null);

insert(node3, 2);