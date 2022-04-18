/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 优化：使用map或者hashTable存储数据，直接定位target - nums[i] ;
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

 var twoSum = function(nums, target) {
    if(nums.length <=0 ) return [];
    var hashArr = new Array(nums.length).fill(null);
   //创建hash表
   for(var i = 0; i < nums.length; i++){
       var setHashIndex = Math.abs(nums[i]) % nums.length;
       if(!hashArr[setHashIndex]){
           hashArr[setHashIndex] = {
               index: i,
               value: nums[i]
           };
       }else{
           // 有hash冲突，依次往后存取
           var indexOffset = setHashIndex + 1 === nums.length  ? - setHashIndex : 1;
           while(hashArr[setHashIndex + indexOffset]){
               indexOffset++;
               if(setHashIndex + indexOffset === nums.length){
                   indexOffset = -setHashIndex;
               }
           }
           hashArr[setHashIndex + indexOffset] = {
               index: i,
               value: nums[i]
           };
       }
   }
   for(var i = 0; i<nums.length; i++){
       var hashTarget = target - nums[i];
       var indexOffset = 0;
       while(hashArr[Math.abs(hashTarget) % nums.length + indexOffset].value !== hashTarget || hashArr[Math.abs(hashTarget) % nums.length + indexOffset].index === i){
           indexOffset++;
           if(Math.abs(hashTarget) % nums.length + indexOffset === nums.length){
               indexOffset = - (Math.abs(hashTarget) % nums.length);
           }
           if(!indexOffset){
               //没有找到
               break;
           }
       }
       if(hashArr[Math.abs(hashTarget) % nums.length + indexOffset].value === hashTarget && hashArr[Math.abs(hashTarget) % nums.length + indexOffset].index !== i){
           // 找到了
           return [i, hashArr[Math.abs(hashTarget) % nums.length + indexOffset].index]
       }
   };
}
const twoSum2 = function(nums, target){
   for(var i = 0; i<nums.length; i++){
       if(nums[i] >= target) break;
       for(var j = i+1; j<nums.length; j++){
           if(nums[j] >= target) break;
           if(nums[i] + nums[j] === target){
               return [i,j]
           }
       }
   }
}
const res = twoSum([3,2,95,4,-3], 92);
