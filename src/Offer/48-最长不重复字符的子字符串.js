/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (!s) return 0;
    if (s.length === 1) return 1;
    var start = 0;
    var end = 0;
    var p;
    var maxLen = 1;
    var num;
    var flagObj = {};
    // 创建标记对象
    for (var i = 0; i < s.length; i++) {
        var char = s[i];
        if (char in flagObj) continue;
        flagObj[char] = {
            index: -1,
            isExist: false
        };
    }
    var keys = Object.keys(flagObj);
    if (keys.length <= 2) return keys.length;

    while (end < s.length) {
        p = flagObj[s[end]];
        if (p.isExist) {
            // [start - index) 的元素标记清空
            num = p.index - start;
            while (num) {
                flagObj[s[start + num - 1]].isExist = false;
                num--;
            }
            start = p.index + 1;
            p.index = end;
        } else {
            p.isExist = true;
            p.index = end;
        }
        if (end - start + 1 > maxLen) maxLen = end - start + 1;
        end++;
    }
    return maxLen;
};

const res = lengthOfLongestSubstring('aaaa');
