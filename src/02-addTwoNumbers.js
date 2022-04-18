// function ListNode(val, next) {
//     return {
//         val: (val===undefined ? 0 : val),
//         next: next===undefined ? null : next
//     }
// }
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
//  输入：l1 = [2,4,3], l2 = [5,6,4]
//  输出：[7,0,8]
//  解释：342 + 465 = 807.

const addTwoNumbers = function(l1, l2) {
    if(!l1 && !l2) return new ListNode(0);
    if(!l1) return l2;
    if(!l2) return l1;
    var head;
    var cur;
    var addBit = 0;
    var lastAddBit = 0;
   while(l1 || l2){
       const num1 = l1 ? l1.val : 0;
       const num2 = l2 ? l2.val : 0;
       if(num1 + num2 >=10){
           addBit = 1;
       }else{
           addBit = 0;
       }
       const sum = ( num1 + num2 ) % 10;
       if(sum + lastAddBit >=10){
           addBit = 1;
       }
       if(!head){
           head = new ListNode((sum + lastAddBit) % 10);
           cur = head;
       }else{
           cur.next = new ListNode((sum + lastAddBit) % 10);
           cur = cur.next;
       }
       lastAddBit = addBit;
       l1 = l1 ? l1.next : null;
       l2 = l2 ? l2.next : null;
   }
   if(addBit === 1){
       cur.next = new ListNode(addBit);
   }
   return head;
};