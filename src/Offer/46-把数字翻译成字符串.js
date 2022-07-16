/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
    if (num < 10) return 1;
    var res = 0;
    var str = String(num);
    function dfs(start, end) {
        if (end > str.length - 1) return;
        if (end > start) {
            var num = Number(String(str[start]) + str[end]);
            if (num > 25 || num < 10) return; //超过25 或者03这种不算 03算在3中
        }
        if (end === str.length - 1) {
            res++;
            return;
        };
        for (var i = end + 1; i <= end + 2; i++) {
            i < str.length && dfs(end + 1, i);
        }
    }
    dfs(-1, -1);
    return res;
};