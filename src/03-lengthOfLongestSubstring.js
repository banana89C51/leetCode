/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    if(!s) return 0;
    if(s.length === 1) return 1;
    var headIndex=0, tailIndex = 0;
    var longestInfo = {
        len: 0,
        index: 0
    }
    while(tailIndex+1 < s.length){
        const repetIndex = isHasRepetChar(s, headIndex, tailIndex, s[tailIndex + 1]);
        if(repetIndex>=0){
            //有重复子串  比对记录当前子串 headIndex移动
            if((tailIndex-headIndex) > longestInfo.len){
                longestInfo.len = tailIndex-headIndex;
                longestInfo.index = headIndex;
            }
            headIndex = repetIndex+1;    
        }
        // 没有重复子串
        tailIndex++;  
    }
    if(tailIndex-headIndex > longestInfo.len ){
        longestInfo.len = tailIndex-headIndex;
        longestInfo.index = headIndex;
    }
    
    return ++longestInfo.len;
};
var isHasRepetChar = function(str, start, end, char){
    if(!str || start<0 || end<0 || !char || start >=str.length || end>=str.length ) return -1;
    for(var i = start; i <= end; i++){
        if(str[i] === char) return i;
    }
    return -1;
}
const s1 = "abcabcbb";
const s2 = "au";
const s3 = "pwwkew";
const s4 = "bb";
// const aa = isHasRepetChar('abcabcbb', 0,3, 'a');
const res1 = lengthOfLongestSubstring('aab');
const res2 = lengthOfLongestSubstring(s2);
const res3 = lengthOfLongestSubstring(s3);
const res4 = lengthOfLongestSubstring(s4);

console.log();