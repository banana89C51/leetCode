/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
    if (target <= 0) return [];
    var res = [];
    var n1, n2, count, arr, x;
    var isEven = !(target % 2); //是否是偶数
    if (!isEven) res.push([(target - 1) / 2, (target - 1) / 2 + 1]);
    for (var i = 3; i < target; i++) {
        if (i % 2) {
            //奇数个数
            if (isDecimal(target / i)) continue;
            x = target / i;
            n1 = x - 1;
            n2 = x + 1;
            count = (i - 1) / 2;
            if (n1 < count) continue;
            arr = [];
            arr.push(x);
            while (count--) {
                arr.unshift(n1--);
                arr.push(n2++);
            }
            res.push(arr);
        } else {
            //偶数个数
            x = 2 * target / i;
            if (isDecimal(x) || !(x % 2)) continue;
            n1 = (x - 1) / 2;
            n2 = n1 + 1;
            count = i / 2;
            if (n1 < count) continue;
            arr = [];
            while (count--) {
                arr.unshift(n1--);
                arr.push(n2++);
            }
            res.push(arr);
        }
    }
    res.reverse();
    return res;
};

function isDecimal(num) {
    var str = num + '';
    return str.indexOf('.') !== -1
}


findContinuousSequence(15);