/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function (n, m) {
    if (m === 1) return n[n.length - 1];
    var delIndex = 0;
    var step = m - 1;
    while (n.length > 1) {
        while (step--) {
            delIndex = (delIndex + 1) % n.length;
        }
        n.splice(delIndex, 1);
        step = m - 1;
    }
    return n[0];
};

lastRemaining