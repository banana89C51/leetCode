/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    if (!nums) return null;
    var len = nums.length;
    var start = 0;
    var end = len - 1;
    var mid = Math.floor((start + end) / 2);
    while (start < end) {
        if (nums[mid] === mid) start = mid + 1
        else end = mid - 1;
        mid = Math.floor((start + end) / 2);
    }
    if (start === nums[start]) return start + 1;
    return start;
};
missingNumber([0, 1, 2, 3]);