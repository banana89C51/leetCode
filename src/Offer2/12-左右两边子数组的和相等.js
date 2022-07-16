/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    var leftSum = [0];
    var rightSum = [0];
    for(var i = 1; i < nums.length; i++) leftSum.push(leftSum[i-1] + nums[i-1])
    for(var i = nums.length - 2; i>=0; i--) rightSum.unshift(rightSum[0] + nums[i+1])
    for(var i = 0; i<leftSum.length; i++){
        if(leftSum[i] === rightSum[i]) {
            return i;
        }
    }
    return -1;
};

const arr =[1,2,3];
const res = pivotIndex(arr);
console.log(res);