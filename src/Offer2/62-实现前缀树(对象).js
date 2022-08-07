/**
 * Initialize your data structure here.
 */
 var Trie = function() {
    this.root = {};
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    var pNode = this.root;
    for(const c of word){
        if(!pNode[c]){
            pNode[c] = {};
        }
        pNode = pNode[c];
    }
    pNode.isEnd = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    var pNode = this.root;
    for(const c of word){
        if(!pNode[c]) return false
        pNode = pNode[c];
    }
    return Boolean(pNode.isEnd);
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    var pNode = this.root;
    for(const c of prefix){
        if(!pNode[c]) return false
        pNode = pNode[c];
    }
    return true;
};
var obj = new Trie()
obj.insert('apple')
obj.insert('app')
obj.insert('beer')
obj.insert('add')
obj.insert('jam')
obj.insert('rental')
// obj.insert('app')
var param_2 = obj.search('apps')
var param_3 = obj.startsWith('apple')