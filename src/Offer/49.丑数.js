/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
    var index = n;
    if (n <= 6) return n;
    var res = [1];
    var p2 = 0;
    var p3 = 0;
    var p5 = 0;
    while (--n) {
        var num = Math.min(res[p2] * 2, res[p3] * 3, res[p5] * 5);
        res.push(num);
        if (res[p2] * 2 === num) p2++;
        if (res[p3] * 3 === num) p3++;
        if (res[p5] * 5 === num) p5++;
    }
    return res[index - 1];
};

nthUglyNumber(7);