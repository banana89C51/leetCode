/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
//  var topKFrequent = function(nums, k) {
//     if(nums.length <=1) return nums;
//     var markArr = [];
//     var markMap = new Map();

//     for(var i =0; i<nums.length; i++){
//         var obj;
//         if(!markMap.has(nums[i]) && markArr.length < k){
//             obj = {
//                 val: nums[i],
//                 count: 1,
//                 isInOrder: true
//             }
//             markArr.push(obj);
//             markMap.set(nums[i], obj);
//         }else if(!markMap.has(nums[i])){
//             obj = {
//                 val: nums[i],
//                 count: 1,
//                 isInOrder: false
//             }
//             markMap.set(nums[i], obj);
//         }else if(markMap.get(nums[i]).isInOrder){
//             markMap.get(nums[i]).count++;
//             markArr.sort((a,b) => b.count - a.count);
//         }else if(markMap.get(nums[i]).count < markArr[markArr.length - 1].count){
//             markMap.get(nums[i]).count++;
//         }else{
//             markMap.get(nums[i]).count++;
//             markArr[markArr.length - 1].isInOrder = false;
//             markArr[markArr.length - 1] = markMap.get(nums[i]);
//             markArr[markArr.length - 1].isInOrder = true;
//             markArr.sort((a,b) => b.count - a.count);
//         }
//     }
//     var res = [];
//     markArr.map((obj) => {
//         res.push(obj.val);
//     }); 
//     return res;
// };
var topKFrequent = function(nums, k) {
    if(nums.length <=1) return nums;
    nums.sort();
    var num = nums[0];
    var count = 0;
    var res = [];
    nums.map((val, index) => {
        if(val !== num){
            res.push({
                val: num,
                count: count
            });
            count = 0;
            if(index < nums.length - 1){
                num = nums[index + 1];
            }
        }else{
            count++;
        }
    });
    res.sort((a,b) => b.count - a.count);
    var n = [];
    for(var i = 0; i < k; i++){
        n.push(res[i].val);
    }
    return n;
};
var nums =[1,1,1,2,27,3,123,3,3,3,6,7,7,8,8,3];
var k = 2;
var res = topKFrequent(nums, k);
console.log(res);