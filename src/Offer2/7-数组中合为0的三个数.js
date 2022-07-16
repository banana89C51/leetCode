/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (nums.length < 3) return [];
    nums = nums.sort((a, b) => a - b);
    function findTwoSum(headIndex, target) {
        var start = headIndex;
        var end = nums.length - 1;
        var sum;
        var flagMap = new Map();
        var res = [];
        while (start < end) {
            sum = nums[start] + nums[end];
            if (sum > target) end--
            else if (sum < target) start++
            else {
                if (!flagMap.has('' + nums[start])) {
                    res.push([nums[start], nums[end]]);
                    flagMap.set('' + nums[start], true);
                }
                start++;
            }
        }
        return res;
    }
    var flagMap = new Map();
    var res = [];
    var arr, key;
    for (var i = 0; i < nums.length; i++) {
        arr = findTwoSum(i + 1, -nums[i]);
        arr && arr.map(cp => {
            key = nums[i] + '_' + cp[0];
            if (!flagMap.has(key)) {
                res.push([nums[i], ...cp]);
                flagMap.set(key, true);
            }
        });
    }
    return res;
};
const nums = [];
threeSum(nums);