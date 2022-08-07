/**
 * Initialize your data structure here.
 */
 var Trie = function() {
    this.root = new Map();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    var pNode = this.root;
    for(var i = 0; i<word.length; i++){
        if(!pNode.get(word[i])){
            pNode.set(word[i],{
                num: 0,
                subMap: new Map()
            });
        }
        if(i === word.length - 1){
            pNode.get(word[i]).num++;
            return;
        }
        pNode = pNode.get(word[i]).subMap;
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
    for(var i = 0; i < word.length; i++){
        var pTmp = pNode.get(word[i]);
        if(!pTmp) return false;
        if(i === word.length - 1 && !pTmp.num) return false; 
        pNode = pTmp.subMap;
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
    for(var i = 0; i < prefix.length; i++){
        var pTmp = pNode.get(prefix[i]);
        if(!pTmp) return false;
        pNode = pTmp.subMap;
    }
    return true;
};
var obj = new Trie()
obj.insert('apple')
obj.insert('asplte')
obj.insert('app')
var param_2 = obj.search('asplte')
var param_3 = obj.startsWith('applt')