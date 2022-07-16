// 递归2
/**
 * @param {number[][]} grid
 * @return {number}
 */


var maxValue = function (grid) {
    var maxRow = grid.length;
    var maxCol = grid[0].length;
    function dfs(row, col) {
        if (!row && !col) return grid[row][col];
        if (!row) return grid[row][col] + dfs(row, col - 1);
        if (!col) return grid[row][col] + dfs(row - 1, col);
        return grid[row][col] + Math.max(dfs(row - 1, col), dfs(row, col - 1));
    }
    return dfs(maxRow - 1, maxCol - 1);
};

const grid = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
];
const res = maxValue(grid);
console.log(res);