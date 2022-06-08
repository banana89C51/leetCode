/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
    if (!s || s.length <= 0) return s;
    var arr = s.split(' ');
    return arr.join('20%');
};
const res = replaceSpace("We  are   happy.");
console.log(res)