/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
    if (!k) return 1;

    var flagArr = [];
    for (var i = 0; i < m; i++) {
        const item = [];
        for (var j = 0; j < n; j++) {
            item.push(false);
        }
        flagArr.push(item);
    }
    const maxLen = isPassPath(0, 0, m - 1, n - 1, k, 0, flagArr);
    return maxLen;
};
var isPassPath = function (x, y, m, n, k, curLen, flagArr) {
    if (x < 0 || x > m || y < 0 || y > n || calBitSum(x, y) > k) return curLen;
    if (flagArr[x][y]) return curLen;
    curLen++;
    flagArr[x][y] = true;
    const up = isPassPath(x - 1, y, m, n, k, curLen, flagArr);
    const down = isPassPath(x + 1, y, m, n, k, curLen, flagArr);
    const left = isPassPath(x, y - 1, m, n, k, curLen, flagArr);
    const right = isPassPath(x, y + 1, m, n, k, curLen, flagArr);
    //无路可走 清空标记数组
    if (curLen === up && curLen === down && curLen === left && curLen === right) {
        flagArr[x][y] = false;
        return curLen;
    }
    const max = Math.max(Math.max(up, down), Math.max(left, right));
    return max;
}
var clearArr = function (arr) {
    const m = arr.length;
    const n = arr[0].length;

    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            arr[i][j] = false;
        }
    }
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
const res = movingCount(7, 2, 3);
console.log(res);