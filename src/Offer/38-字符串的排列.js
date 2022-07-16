// /**
//  * @param {string} s
//  * @return {string[]}
//  */
// var permutation = function (s) {
//     if (!s) return [];
//     const arr = dfs(s, []);
//     // 去重
//     return Array.from(new Set(arr))
// };
// function dfs(s, indexArr) {
//     if (s.length === indexArr.length) {
//         var str = [];
//         indexArr.map(index => {
//             str.push(s[index])
//         })
//         return [str.join('')];
//     }
//     var res = [];
//     for (var i = 0; i < s.length; i++) {
//         if (!indexArr.includes(i)) {
//             var str = dfs(s, indexArr.concat([i]));
//             res = res.concat(str);
//         }
//     }
//     return res;
// }

// const res = permutation('aab');
// console.log(res);

var permutation = function (s) {
    if (!s) return [];
    var indexArr = [];
    var res = [];
    var dfs = function () {
        if (indexArr.length === s.length) {
            var str = '';
            indexArr.map(index => str += s[index]);
            !res.includes(str) && res.push(str);
            return;
        }
        for (var i = 0; i < s.length; i++) {
            if (!indexArr.includes(i)) {
                indexArr.push(i);
                dfs();
                indexArr.pop();
            }
        }
    }
    dfs();
    return res;
};

permutation('aac');
