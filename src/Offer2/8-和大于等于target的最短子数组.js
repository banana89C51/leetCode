/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    if (!nums.length) return 0;
    var start = 0;
    var end = 0;
    var curSum = nums[0];
    var minLen = nums.length + 1;
    while (end < nums.length || start > end) {
        if (curSum < target) {
            end++;
            end < nums.length && (curSum += nums[end]);
        } else if (curSum > target) {
            curSum -= nums[start];
            start++;
        } else {
            minLen = end - start + 1 < minLen ? end - start + 1 : minLen;
            end++;
            end < nums.length && (curSum += nums[end]);
        }
    }
    return minLen === nums.length + 1 ? 0 : minLen;
};

const res = minSubArrayLen(11, [1, 2, 3, 4, 5]);
console.log(res);