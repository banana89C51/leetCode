/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
// 优化方法：使用 小根堆
var getLeastNumbers = function (arr, k) {
    if (k === 0) return [];
    if (k === arr.length) return arr;
    arr.sort((a, b) => b - a);
    return arr.slice(-k);
};
const arr = [3, 1, 2];
const res = getLeastNumbers(arr, 2);
console.log();