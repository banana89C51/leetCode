/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNonDuplicate = function(nums) {
    if(nums.length === 1) return nums[0];
    var start = 0;
    var end = arr.length - 1;
    var mid = Math.floor((start + end) / 2);
    while(1){
        if(!(mid % 2)){
            if(nums[mid] === nums[mid - 1]){
                // 左移
                end = mid;
            }else if(nums[mid] === nums[mid +1]) {
                // 右移
                start = mid;
            }else{
                return nums[mid];
            }
        }else{
            if(nums[mid] === nums[mid + 1]){
                // 左移
                end = mid;
            }else if(nums[mid] === nums[mid - 1]) {
                // 右移
                start = mid + 1;
            }else{
                return nums[mid];
            }
        }
        mid = Math.floor((start + end) / 2);
    }
};
var arr = [1,2,2,3,3,4,4,5,5];
var res = singleNonDuplicate(arr);
