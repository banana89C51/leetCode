/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
 var isAlienSorted = function(words, order) {
    if(words.length === 1) return true;
    // create order map
    var orderMap = new Map();
    for(var i = 0; i< order.length; i++){
        orderMap.set(order[i], i);
    }
    function isInOrder(w1, w2){
        var len = Math.min(w1.length, w2.length);
        for(var i = 0; i<len; i++){
            if(orderMap.get(w1[i]) < orderMap.get(w2[i])) return true;
            else if(orderMap.get(w1[i]) > orderMap.get(w2[i])) return false;
        }
        return !(w1.length > len)
    }
    for(var i = 0; i < words.length - 1; i++){
        if(!isInOrder(words[i], words[i+1])) return false;
    }
    return true;
};
var words =  ["hello","leetcode"];
var order =  "hlabcdefgijkmnopqrstuvwxyz";

var res = isAlienSorted(words, order);
console.log(res);