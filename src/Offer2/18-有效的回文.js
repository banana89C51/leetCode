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

var isPalindrome = function(s) {
   if(!s) return true;
   var start = 0;
   var end = s.length - 1;

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
       if(a!==b) return false;
       start++;
       end--;
   }
   return true;
};

var s = "0P";
const res = isPalindrome(s);
console.log(res);