/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (nums.length <= 1) return nums;
    var max = nums[0];
    var start = 0;
    var end = 0;
    var curSum = 0;
    nums.map((val, index) => {
        curSum += val;
        if (val > curSum) {
            start = index;
            curSum = val;
        }
        if (curSum > max) {
            max = curSum;
            end = index;
        }
        if (val > max) {
            start = end = index;
            max = curSum = val;
        }
    })
    return max;
};

var arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
var res = maxSubArray(arr);
console.log(res);