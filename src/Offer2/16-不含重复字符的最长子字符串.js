/**
 * @param {string} s
 * @return {number}
 */
 var minWindow = function(s) {
    if(!s) return 0;
    if(s.length) return 1;
    // create mark map(key, index)
    var markMap = new Map();
    for(var i = 0; i< s.length; i++){
        if(markMap.has(s[i])) continue;
        markMap.set(s[i] , -1);
    }
    // travel arr
    var start = 0;
    var maxLen = 1;
    var curLen = 0;
    for(var i = 0; i < s.length; i++){
        if(markMap.get(s[i]) === -1){
            markMap.set(s[i], i);
            curLen = i - start + 1;
            maxLen = curLen > maxLen ? curLen : maxLen;
        }else{
            start = markMap.get(s[i]) + 1;
            markMap.set(s[i], i);
        }
    }
    return maxLen;
};