/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    var start = 0;
    var end = 0;
    var res = 0;
    var multi = 1;
    while (start < nums.length) {
        multi *= nums[end];
        if (multi < k) {
            res++;
            if (end < nums.length - 1) end++
            else { 
                start = end = start + 1;
                multi = 1;
            }
        } else {
            start = end = start + 1;
            multi = 1;
        }
    }
    return res;
};

const arr = [1,2,3];
const res = numSubarrayProductLessThanK(arr, 0);