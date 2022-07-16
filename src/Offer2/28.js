
// Definition for a Node.
function Node(val,prev,next,child) {
    this.val = val;
    this.prev = prev;
    this.next = next;
    this.child = child;
};

/**
 * @param {Node} head
 * @return {Node}
 */
 var flatten = function(head) {
    if(!head) return head;
    var toJoinTailNode;
    var p;
    function dfs(node){
        if(!node) return null;
        if(!node.child && !node.next) {
            toJoinTailNode = node;
            return node;
        }
        var nNode = node.child ? dfs(node.child) : dfs(node.next);
        if(nNode === node.child) {
            p = node.next;
            node.child = null;
            node.next = nNode;
            nNode.prev = node;

            toJoinTailNode.next = p;
            p && (p.prev = toJoinTailNode);
            p && dfs(p);
        }
        return node;
    }
    return dfs(head);
};
var node3 = new Node(3, null,null,null)
var node2 = new Node(2,null,null,node3)
var node1 = new Node(1, null,null, node2)
flatten(node1);

