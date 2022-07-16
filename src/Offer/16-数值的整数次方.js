/** 
 * @param {number} x 底数
 * @param {number} n 指数
 * @return {number} x^n
 */

var myPow = function (x, n) {
    if (n === 0) return 1;
    if (n < 0) return 1 / dg(x, -n);
    // return dg(x, n);
    return dd(x, n);
};
// 递归
var dg = function (x, n) {
    if (n === 1) return x;
    const a = Math.floor(n / 2); // 向下取整，除2
    const b = n % 2; //余数
    const num = dg(x, a); //上一个递归的结果
    return b ? num * num * x : num * num;
}
// 迭代（如果知道递归次数，就是迭代）
var dd = function (x, n) {
    var num = 1;
    var bit = 0; //记录迭代的二进制位数
    while (n) {
        // 有1的第bit位
        if (n & 1) {
            num = num * (x ** 2 ** bit);
        }
        bit++;
        n = n >> 1;
    }
    return num;
}
const res = myPow(2, 10);
const aa = 2 ** 6;
console.log(2 ^ 2);