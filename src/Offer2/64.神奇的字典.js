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
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(searchWord) {
    var hasChange = false;
    function dfs(index, node){
        if(index === searchWord.length){
            return Boolean(node.isEnd && hasChange);
        }
        var c = searchWord[index];
        if(!node[c]){
            if(!hasChange){
                hasChange = true;
                for(var p in node){
                    if(dfs(index+1, node[p])){
                        return true;
                    }
                }
                hasChange = false;
            }   
            return false;
        }else{
            if(dfs(index+1, node[c])){
                return true;
            }
            if(hasChange) return false;
            for(var p in node){
                if(p === c || p === 'isEnd') continue;
                hasChange = true;
                if(dfs(index+1, node[p])){
                    return true;
                }
                hasChange = false;
            }
            return false;
        }
    }
    return dfs(0, this.root);
}; 

// var initArr = ["hello", "hallo", "helt"]
var initArr = ["a", "b", "ab", "abc"];

var dic = new MagicDictionary();
dic.buildDict(initArr);
var word =  "bbc";
var res = dic.search(word);
console.log(res);