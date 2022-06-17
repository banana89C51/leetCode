/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    var sum = 0;
    while (n) {
        n &= n - 1; //每次运算都消掉一个1
        sum++;
    }
    return sum;
};

console.log(hammingWeight(2334));