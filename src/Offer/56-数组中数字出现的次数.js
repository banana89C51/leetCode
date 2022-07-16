/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
    if (!nums || nums.length === 1) return nums;
    if (nums.length === 2) return nums;
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum ^= nums[i];
    }
    var sum2 = sum;
    var bit = 0;
    while (!(sum2 & 1)) {
        sum2 >>= 1;
        bit++;
    }
    sum2 = 2 ** bit;
    // 分组
    var a = 0;
    var b = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] & sum2) {
            a ^= nums[i];
        } else {
            b ^= nums[i]
        }
    }
    return [a, b]
};


singleNumbers([1, 2, 10, 4, 1, 4, 3, 3]);