/**
 * Initialize your data structure here.
 */
var MapSum = function() {
    this.root = {};
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    var pNode = this.root;
    for(var c of key){
        if(!pNode[c]){
            pNode[c] = {}
        }
        pNode = pNode[c];
    }
    pNode["val"] = val;
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    if(!prefix) return 0;
    var pNode = this.root;
    var sum = 0;
    for(var c of prefix){
        if(!pNode[c]) return 0;
        pNode = pNode[c];
    }
    function dfs(node){
        if("val" in node){
            sum+=node.val;
        }
        var propCount = 0;
        for(var prop in node){
            propCount++;
            prop !== "val" && dfs(node[prop]);
        }
        if(propCount === 1 && "val" in node) return;
    }
    dfs(pNode);
    return sum;
};

var obj = new MapSum();
obj.insert("apple",12);
obj.insert("app",10);
obj.insert("ap",3);
obj.insert("ast",13);
var param_2 = obj.sum("appt");