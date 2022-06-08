/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    if (!board || !board.length || !board[0].length) return false;
    if (!word) return false;
    // 创建标记数组
    var flagArr = [];
    for (var i = 0; i < board.length; i++) {
        flagArr.push(Object.assign([], board[i]));
    }
    var initArr = function (flagArr) {
        flagArr.forEach((el) => {
            el.forEach((val, index) => el[index] = false);
        });
    }
    initArr(flagArr);
    for (var row = 0; row < board.length; row++) {
        for (var col = 0; col < board[row].length; col++) {
            const res = findNext(row, col, board, word, 0, flagArr);
            if (!res) {
                //清空标志数组
                initArr(flagArr);
            } else {
                return true;
            }
        }
    }
    return false;
};

var findNext = function (row, col, board, word, index, flagArr) {
    const maxRow = board.length - 1;
    const maxCol = board[0].length - 1;
    if (row < 0 || row > maxRow || col < 0 || col > maxCol) return false; //超出board范围
    if (index < 0 || index >= word.length) return false; //超出word范围
    if (board[row][col] !== word[index]) return false; //值不匹配
    if (flagArr[row][col]) return false; //元素被标记过 
    if (index === word.length - 1) return true; //找到最后一个，并且值相等
    flagArr[row][col] = true;
    const up = findNext(row - 1, col, board, word, index + 1, flagArr);
    const down = findNext(row + 1, col, board, word, index + 1, flagArr);
    const left = findNext(row, col - 1, board, word, index + 1, flagArr);
    const right = findNext(row, col + 1, board, word, index + 1, flagArr);
    // 如果之后的遍历没有找到，恢复标记数组
    if (!(up || down || left || right)) flagArr[row][col] = false;

    return up || down || left || right;
}

const board = [["A", "B", "C", "E"], ["S", "F", "E", "S"], ["A", "D", "E", "E"]];
const word = "ABCESEEEFS";
const res = exist(board, word);
console.log(res);