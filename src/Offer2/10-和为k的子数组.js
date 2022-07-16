/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    var len = nums.length;
    var start = 0;
    var end = 0;
    var sum = nums[0];
    var res = 0;
    while (start < len) {
        if (sum === k) res++;
        if (end < len - 1) {
            end++;
            sum += nums[end];
        }
        else {
            start++;
            end = start;
            sum = nums[start];
        }
    }
    return res;
};

const arr = [1, 1, 1];
const res = subarraySum(arr, 2);
console.log(res);