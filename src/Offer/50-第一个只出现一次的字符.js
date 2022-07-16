/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
    if (!s) return ' ';
    if (s.length === 1) return s[0];
    var set = {};
    for (var i = 0; i < s.length; i++) {
        if (s[i] in set) {
            set[s[i]]++;
        } else {
            set[s[i]] = 1;
        }
    }
    for (var key in set) {
        if (set[key] === 1) return key;
    }
    return ' ';
};


firstUniqChar('aaccdeff');