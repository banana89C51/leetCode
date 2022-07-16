/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
    if (n < 10) return n;
    var bit = 2;
    var startIndex = 10;
    var endIndex = 9 * 10 ** (bit - 1) * bit + startIndex - 1;
    while (n > endIndex) {
        bit++;
        startIndex = endIndex + 1;
        endIndex = 9 * 10 ** (bit - 1) * bit + startIndex - 1;
    }
    //startIndex 到 startIndex 之间 总共 9 * 10 ** bit * bit个数
    var offset = (n - startIndex) % bit;
    var offNum = (n - offset - startIndex) / bit;
    var startNum = 10 ** (bit - 1);
    var str = String(startNum + offNum);
    return str[offset];
};

const res = findNthDigit(200);
console.log(res);