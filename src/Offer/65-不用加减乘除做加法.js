/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function (a, b) {
    if (!a) return b;
    if (!b) return a;

    var bit1, bit2, num;
    var res = [];
    var add = 0;
    while (a || b) {
        bit1 = a & 1;
        bit2 = b & 1;
        if (bit1 === 1 && bit2 === 1) {
            num = add;
            add = 1;
        } else {
            if ((bit1 | bit2) > 0 && add === 1) {
                add = 1;
                num = 0;
            } else {
                add = 0;
                num = bit1 | bit2;
            }
        }
        a && (a >>= 1);
        b && (b >>= 1);
        res.unshift(num);
    }
    if (add === 1) res.unshift(1);
    return parseInt(res.join(''), 2);
};

add(-12, 9);