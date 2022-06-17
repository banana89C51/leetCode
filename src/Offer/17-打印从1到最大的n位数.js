/**
 * @param {number} n
 * @return {number[]}
 */
// 最简单解法
// var printNumbers = function (n) {
//     if (n === 0) return [];
//     var arr = [];
//     var max = 1;
//     while (n) {
//         max *= 10;
//         n--;
//     }
//     for (var a = 1; a < max; a++) {
//         arr.push(a);
//     }
//     return arr;
// };


//考虑大数
var printNumbers = function (n) {
    if (n === 0) return [];

    var dfs = function (x) {
        //终止条件：已固定完所有位
        if (x === n) {
            res.push(num.join('')) //拼接 num 并添加至 res 尾部
            return;
        }
        //遍历 0 - 9
        for (var i = 0; i < 10; i++) {
            num[x] = String(i); //固定第 x 位为 i
            dfs(x + 1) //开启固定第 x + 1 位
        }
    }
    var num = [];
    var res = [];
    var arr = dfs(0);
    return arr;
};
// 以n = 3, 0 - 999为例子



printNumbers(2);