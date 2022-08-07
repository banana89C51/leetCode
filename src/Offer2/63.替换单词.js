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
 * @param {string} word
 * @return {string} replace word
 */
Trie.prototype.replace = function(word) {
    var pNode = this.root;
    var res = [];
    for(const c of word){
        res.push(c);
        if(!pNode[c]) return word;
        if(pNode[c].isEnd) return res.join('');
        pNode = pNode[c];
    }
    return word;
};

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    var trie = new Trie();
    for(const word of dictionary){
        trie.insert(word);
    }
    var res = sentence.split(' ');
    for(var i = 0; i < res.length ; i++){
        var replaceWord = trie.replace(res[i]);
        res[i] = replaceWord;
    }
    return res.join(' ');
};


var dictionary = ["a","b","c", "aad"]
var sentence = "aadsfasf absbs bbab cadsfafs"
const res = replaceWords(dictionary, sentence);
