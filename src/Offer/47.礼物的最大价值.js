// 递归所有的路径，会超时
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
    var max = 0;
    var maxRow = grid.length;
    var maxCol = grid[0].length;
    function dfs(row, col, path) {
        if (row === maxRow - 1 && col === maxCol - 1) {
            path += grid[row][col];
            max = path > max ? path : max;
            return;
        } else if (row === maxRow - 1) {
            // 右
            dfs(row, col + 1, path + grid[row][col]);
            return;
        } else if (col === maxCol - 1) {
            // 下
            dfs(row + 1, col, path + grid[row][col]);
            return;
        }
        // 右
        dfs(row, col + 1, path + grid[row][col]);
        // 下
        dfs(row + 1, col, path + grid[row][col]);
    }
    dfs(0, 0, 0);
    return max;
};

const grid = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
];
const res = maxValue(grid);
console.log(res);