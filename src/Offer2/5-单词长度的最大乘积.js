/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
    if (words.length === 1) return words.length;
    var wordMapArr = [];
    words.map(w => {
        var m = new Map();
        for (var i = 0; i < w.length; i++) {
            m.set(w[i], i);
        }
        wordMapArr.push(m);
    });
    var maxMulti = 0;
    var len = words.length;
    var flag = true;
    for (var i = 0; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
            for (var s = 0; s < words[j].length; s++) {
                if (wordMapArr[i].has(words[j][s])) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                maxMulti = words[i].length * words[j].length > maxMulti ? words[i].length * words[j].length : maxMulti;
            }
            !flag && (flag = true);
        }
    }
    return maxMulti;
};
const words = ["a", "aa", "aaa", "aaaa"];

