/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    var i = 0;
    for(i; i < s.length; i++){
        if(s[i]!==t[i])break;
    }
    if(i === s.length) return false;
    var markMap = new Map();
    for(i = 0; i < s.length; i++){
        if(markMap.has(s[i])) markMap.set(s[i], markMap.get(s[i]) + 1);
        else markMap.set(s[i], 1)
    }
    for(i = 0; i < t.length; i++){
        if(!markMap.has(t[i])) return false;
        else if(markMap.get(t[i]) === 0) return false;
        else markMap.set(t[i], markMap.get(t[i]) - 1)
    }
    return true;
};
var s = 'aacc';
var t = 'ccac';
var res = isAnagram(s, t);
console.log(res);

