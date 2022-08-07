/**
 * @param {number} k
 * @param {number[]} nums
 */
 var KthLargest = function(k, nums) {
    this.capcity = k;
    this.sortedArr = [];
    if(!nums.length) return null;
    nums.length && nums.sort((a,b) => b-a);
    for(var i = 0; i<Math.min(nums.length, k); i++){
        this.sortedArr.push(nums[i]);
    }
    return null;
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if(!this.sortedArr.length) {
        this.sortedArr.push(val);
        return val;
    }
    var start = 0;
    var end = this.sortedArr.length - 1;
    var mid = Math.floor((start + end) / 2);
    // find insert position 
    while(start < end){
        if(this.sortedArr[mid] === val){
            break;
        }else if(val < this.sortedArr[mid]){
            start = mid + 1;
        }else{
            end = mid;
        }
        mid = Math.floor((start + end) / 2);
    }
    // insert val
    if(val > this.sortedArr[mid]){
        this.sortedArr.splice(mid, 0, val);
    }else{
        this.sortedArr.splice(mid+1, 0, val);
    }
    // delete the k+1 biggest data
    this.sortedArr.length === this.capcity + 1 && this.sortedArr.pop();
    return this.sortedArr[this.sortedArr.length - 1];
};

var k = 2;
var nums = [0];
var obj = new KthLargest(k, nums)
var tests = [-1, 1, -2, -4, 3];
var res = [];
for(var i = 0; i<tests.length; i++){
    res.push(obj.add(tests[i]))
}
console.log(res);