/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (!matrix || !matrix.length) return [];
    // 处理行矩阵
    if (matrix.length === 1) return matrix[0];

    var maxCol = matrix[0].length;
    var maxRow = matrix.length;

    var ditrect = 1; //1右 2下 3左 4上
    var res = [];
    // 处理列矩阵
    if (matrix[0].length === 1) {
        matrix.map(item => {
            res.push(item[0]);
        });
        return res;
    }
    // 当前坐标
    var row = 0;
    var col = -1;
    var offset = 0;

    const rowArr = [1, 3];
    const colArr = [2, 4];
    //offset < maxCol || offset < maxRow
    while (!(offset === maxCol && rowArr.includes(ditrect)) &&
        !(offset === maxRow && colArr.includes(ditrect))) {
        var step;
        if (ditrect === 1 || ditrect === 3) {
            step = maxCol - offset;
        } else {
            step = maxRow - offset;
        }
        while (step) {
            ditrect === 1 ? col++ : ditrect === 2 ? row++ : ditrect === 3 ? col-- : row--;
            res.push(matrix[row][col]);
            step--;
        }
        if (ditrect % 2) offset++;
        // 改变方向
        ditrect = (ditrect) % 4 + 1;
    }
    return res;
};

const arr = [[1, 2, 3, 4]];
const res = spiralOrder(arr);
console.log(res);