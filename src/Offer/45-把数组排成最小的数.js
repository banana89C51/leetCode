/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
    if (!nums.length) return '';
    if (nums.length === 1) return String(nums[0])
    nums.sort((a, b) => {
        return Number(String(a) + b) - Number(String(b) + a)
    })
    return nums.join('');
};
const arr = [9];
const res = minNumber(arr);
console.log(res);

