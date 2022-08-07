/**
 * Initialize your data structure here.
 */
 var Trie = function() {
    this.root = new Array(26);
    this.root.fill(null);
    this.originASCLL = 'a'.charCodeAt(0);
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    var pNode = this.root;
    var index;
    for(var i = 0; i<word.length; i++){
        index = word.charCodeAt(i) - this.originASCLL;
        if(!pNode[index]){
            var arr = new Array(26);
            arr.fill(null);
            pNode[index] = {
                num: 0,
                next: arr
            }
        }
        if(i === word.length - 1){
            pNode[index].num++;
            return;
        }
        pNode = pNode[index].next;
    }
    return null;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    var pNode = this.root;
    var index;
    for(var i = 0; i < word.length; i++){
        index = word.charCodeAt(i) - this.originASCLL;
        var pTmp = pNode[index];
        if(!pTmp) return false;
        if(i === word.length - 1 && !pTmp.num) return false; 
        pNode = pTmp.next;
    }
    return true;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    var pNode = this.root;
    var index;
    for(var i = 0; i < prefix.length; i++){
        index = prefix.charCodeAt(i) - this.originASCLL;
        var pTmp = pNode[index];
        if(!pTmp) return false;
        pNode = pTmp.next;
    }
    return true;
};
var obj = new Trie()
obj.insert('apple')
obj.insert('asplte')
// obj.insert('app')
var param_2 = obj.search('aspl')
var param_3 = obj.startsWith('asplte')