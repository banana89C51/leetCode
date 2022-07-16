// 动态规划（可以继续优化， 将第一行和第一列提前计算好，在进行循环）
/**
 * @param {number[][]} grid
 * @return {number}
 */


var maxValue = function (grid) {
    var maxRow = grid.length;
    var maxCol = grid[0].length;
    for (var row = 0; row < maxRow; row++) {
        for (var col = 0; col < maxCol; col++) {
            if (!row && !col) continue;
            if (!row) grid[row][col] += grid[row][col - 1];
            else if (!col) grid[row][col] += grid[row - 1][col];
            else grid[row][col] += Math.max(grid[row - 1][col], grid[row][col - 1])
        }
    }
    return grid[maxRow - 1][maxCol - 1];
};

const grid = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
];
const res = maxValue(grid);
console.log(res);