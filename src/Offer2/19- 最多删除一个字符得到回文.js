/**
 * @param {string} s
 * @return {boolean}
 */
 function rightChar(c){
    if(c.charCodeAt(0) >= '0'.charCodeAt(0) && c.charCodeAt(0) <= '9'.charCodeAt(0)) return true;
    if(c.charCodeAt(0) >= 'A'.charCodeAt(0) && c.charCodeAt(0) <= 'Z'.charCodeAt(0)) return true;
    if(c.charCodeAt(0) >= 'a'.charCodeAt(0) && c.charCodeAt(0) <= 'z'.charCodeAt(0)) return true;
    return false;
}

var validPalindrome = function(s) {
    if(!s || s.length === 1) return true;
   var start = 0;
   var end = s.length - 1;
   var delFlag = 0;
   var reStart, reEnd;
   while(start < end){
       if(!rightChar(s[start]) ) {
           start++;
           continue;
       }
       if(!rightChar(s[end])) {
           end--;
           continue;
       }
       var a = s[start].toLowerCase();
       var b = s[end].toLowerCase();
       if(a!==b) {
            if(delFlag === 2) return false;
            if(delFlag === 1) {
                start = reStart;
                end = reEnd;
                delFlag++;
                continue;
            }
            if(s[start] === s[end - 1]){
                reStart = start + 1;
                reEnd = end;
                delFlag++;
                end--;
            }else if(s[end] === s[start + 1]){
                reStart = start;
                reEnd = end - 1;
                delFlag++;
                start++; 
            }else{
                return false;
            }
       }
       start++;
       end--;
   }
   return true;
};

// var s = "eeccccbabccceea";
// var s = "ebcbbececabbacecbbcbe";
var s = 'abac';
const res = validPalindrome(s);
console.log(res);