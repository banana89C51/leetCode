/**
 * Initialize your data structure here.
 */
 var MagicDictionary = function() {
    this.root = {};
};

/** 
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dictionary) {
    for(w of dictionary){
        this.insert(w);
    }
};

/**
 * Inserts a word into the MagicDictionary. 
 * @param {string} word
 * @return {void}
 */
MagicDictionary.prototype.insert = function(word) {
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
 * @param {string[]} words
 * @return {number}
 */
 var minimumLengthEncoding = function(words) {
    var dic = new MagicDictionary();
    for(var i = 0; i < words.length; i++){
        var arr = words[i].split("");
        arr.reverse();
        words[i] = arr.join("");
    }
    dic.buildDict(words); 
    var sumLen = 0;
    function dfs(node, curLen){
        var propCount = 0;
        for(var prop in node){
            propCount++;
            prop!=="isEnd" && dfs(node[prop], curLen + 1);
        }
        if(propCount === 1 && prop === 'isEnd'){
            sumLen+=curLen+1;
            return;
        }
    }
    dfs(dic.root, 0);
    return sumLen;
};
var words = ["t"];
minimumLengthEncoding(words);

