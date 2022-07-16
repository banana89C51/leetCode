/**
 * @param {number[]} nums
 * @return {boolean}
 * 
 * 1、除了大小王不算，没有重复的数
 * 2、最大值和最小值差小于5
 */

var isStraight = function (nums) {
    var map = {};
    var max = 0;
    var min = 0;
    var flag = true;
    nums.map((val) => {
        if (!val) return;
        if (val > max) max = val;
        if (val < min || !min) min = val;
        if (String(val) in map) {
            flag = false;
        } else {
            map[String(val)] = true;
        }
    });
    if (!flag) return false;
    return max - min < 5;
};
const aa = isStraight([0, 0, 2, 2, 4]);
console.log(aa);
