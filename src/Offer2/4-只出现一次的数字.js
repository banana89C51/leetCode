/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    var bitSum = new Array(32); //低索引存储低位
    for (var i = 0; i < nums.length; i++) {
        calEveryBit(nums[i], bitSum);
    }
    var res = [];
    bitSum.map(num => {
        if (num === undefined) return;
        res.unshift(num % 3);
    });
    if (res[0] === 1) {
        // 负数
        res[0] = 0;

        var aa = parseInt(res, 2);
        return -aa;
    }
    res = res.join('');
    return parseInt(res, 2);
};
function calEveryBit(num, arr) {
    var lowBit;
    var index = 0;
    while (index < 32) {
        lowBit = num & 1;
        arr[index] = arr[index] === undefined ? lowBit : arr[index] + lowBit;
        index++;
        num >>= 1;
    }
}

singleNumber([-2, -2, 1, 1, 4, 1, 4, 4, -4, -2]);