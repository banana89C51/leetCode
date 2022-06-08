/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
    if (!matrix || matrix.length <= 0 || matrix[0][0] > target) return false;
    const row = matrix.length - 1;
    const col = matrix[0].length - 1;

    //找到搜索矩形的左上角 和右下角
    var r = row, l = col;
    var maxR = row, maxL = col;
    while (r >= 0 || l >= 0) {
        const val = matrix[r][l];
        if (val === target) return true;
        if (val < target) break;
        if (val > target) {
            maxR = r;
            maxL = l;
        }
        r > 0 ? r-- : {};
        l > 0 ? l-- : {};
    }
    var i, j;
    for (i = 0; i <= row; i++) {
        for (j = l; j <= maxL; j++) {
            if (matrix[i][j] === target) return true;
        }
    }
    for (i = r; i <= row; i++) {
        for (j = 0; j <= l; j++) {
            if (matrix[i][j] === target) return true;
        }
    }
    for (i = 0; i <= r; i++) {
        for (j = maxL; j <= col; j++) {
            if (matrix[i][j] === target) return true;
        }
    }
    return false;
};

const arr = [
    [3, 3, 8, 13, 13, 18],
    [4, 5, 11, 13, 18, 20],
    [9, 9, 14, 15, 23, 23],
    [13, 18, 22, 22, 25, 27],
    [18, 22, 23, 28, 30, 33],
    [21, 25, 28, 30, 35, 35],
    [24, 25, 33, 36, 37, 40]
];

const res = findNumberIn2DArray(arr, 21);
console.log(res);