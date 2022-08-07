// 第二种方法：使用桶排序

var OrderList = function(arr, k){
    this.originArr = arr;
    this.nums =[];
    this.toDeleteIndex = 0;
}
// 返回插入元素的坐标
OrderList.prototype.add = function(num) {
    if(this.nums.length === 0) {
        this.nums.push(num);
        return 0;
    }
    var head = 0;
    var end = this.nums.length - 1;
    var mid =  Math.floor((head + end) / 2);
    var lastAddIndex;
    while(head < end){ 
        if(this.nums[mid] === num){
            this.nums.splice(mid, 0, num);
            lastAddIndex = !mid ? 0 : mid - 1;  
            return lastAddIndex;
        }else if(this.nums[mid] > num){
            end = mid - 1 > 0  ? mid - 1 : 0;
        }else{
            head = mid + 1 < this.nums.length ? mid + 1 : this.nums.length - 1;
        }
        mid = Math.floor((head + end) / 2);
    }
    num > this.nums[mid] ? this.nums.splice(mid + 1, 0, num) : this.nums.splice(mid, 0, num);
    lastAddIndex = num > this.nums[mid] ? (mid + 1) : mid;  
    return  lastAddIndex;
}
// 删除nums中最早插入的元素
OrderList.prototype.delete = function() {
    for(var i=0; i<this.nums.length; i++){
        if(this.nums[i] === this.originArr[this.toDeleteIndex]) break;
    }
    this.nums.splice(i, 1);
    this.toDeleteIndex++;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
 var containsNearbyAlmostDuplicate = function(nums, k, t) {
    if(nums.length <=1) return false;
    // 步长为 k+1的滑动窗口
    if(nums.length <= k + 1){
        nums.sort();
        for(var i = 1; i < nums.length; i++){
            if(nums[i] - nums[i-1] <= t) return true;
        }
        return false;
    }
    var orderList = new OrderList(nums, k);
    var addIndex;
    for(var i = 0; i<nums.length; i++){
        if(i<=k){
            addIndex = orderList.add(nums[i]);
            if(judge(orderList.nums, addIndex, t)) 
            { 
                return true;
            }
            continue;
        }
        orderList.delete();
        addIndex = orderList.add(nums[i]);
        if(judge(orderList.nums, addIndex, t)) {
            return true;
        }
    }
    return false;
};
// 判断数组arr中index相邻的两个数是否 有差的绝对值 <=t的  数组是升序的
function judge(arr,index, t){
    if(arr.length <=1) return false;
    if(index === 0){
        return  arr[1] - arr[0] <= t ;
    }
    if(index === arr.length - 1){
        return arr[index] - arr[index-1] <= t;
    }
    return (arr[index] - arr[index-1] <=t) || (arr[index+1] - arr[index] <=t)
}
var arr = [-8802, -5276, 2433, 2509, 3054, 6470, 8502, 9952,6559, 10000,100000,100000];
var k = 9;
var t = 0;
var res = containsNearbyAlmostDuplicate(arr, k ,t);
console.log(123, res);

