//使用二分提高查找效率
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    if (!nums || (nums.length === 1 && nums[0] !== target)) return 0;
    var start = 0;
    var end = nums.length - 1;
    var mid = Math.floor((start + end) / 2);
    while (nums[mid] !== target && start < end) {
        if (nums[mid] > target) end = mid - 1
        else start = mid + 1;
        mid = Math.floor((start + end) / 2);
    }
    if (nums[mid] !== target) return 0;
    var sum = 1;
    start = mid - 1;
    end = mid + 1;
    while ((start >= 0 && nums[start] === target) || (end < nums.length && nums[end] === target)) {
        if (start >= 0 && nums[start] === target) {
            sum++;
        }
        if (end < nums.length && nums[end] === target) {
            sum++;
        }
        start--;
        end++;
    }
    return sum;
};

search([5, 7, 7, 8, 8, 10], 8);
