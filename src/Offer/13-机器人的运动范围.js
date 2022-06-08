/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
    if (!k || !m || !n) return 1;
    var flagArr = [];
    for (var i = 0; i < m; i++) {
        const item = [];
        for (var j = 0; j < n; j++) {
            item.push(false);
        }
        flagArr.push(item);
    }
    const path = calcPath(0, 0, m - 1, n - 1, k, flagArr);
    return path;
};
var calcPath = function (x, y, m, n, k, flagArr) {
    if (x < 0 || x > m || y < 0 || y > n || calBitSum(x, y) > k) return 0;
    if (flagArr[x][y]) return 0;
    flagArr[x][y] = true;
    const up = calcPath(x - 1, y, m, n, k, flagArr);
    const down = calcPath(x + 1, y, m, n, k, flagArr);
    const left = calcPath(x, y - 1, m, n, k, flagArr);
    const right = calcPath(x, y + 1, m, n, k, flagArr);
    return 1 + up + down + left + right;
}

//计算坐标(x,y)的数位和
var calBitSum = function (x, y) {
    var sum = 0;
    while (x) {
        sum += x % 10;
        x = parseInt(x / 10);
    }
    while (y) {
        sum += y % 10;
        y = parseInt(y / 10);
    }
    return sum;
}
// const res = calBitSum(0, 456);
const res = movingCount(3, 1, 0);
console.log(res);