/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length <=0 && nums2.length <=0 ) return 0;
    const sumLen = nums1.length + nums2.length;
    var sumArr = new Array(sumLen);
    var p1 = 0;
    var p2 = 0;
    var sumIndex = 0;
    while(sumIndex < sumLen){
        if(p1 === nums1.length) {
            sumArr[sumIndex++] = nums2[p2++];
            continue;
        }
        if(p2 === nums2.length) {
            sumArr[sumIndex++] = nums1[p1++];
            continue;
        }
        if(nums1[p1] <= nums2[p2]){
            sumArr[sumIndex++] = nums1[p1++]
        }else{
            sumArr[sumIndex++] = nums2[p2++]
        }
    }
    const middleNum = !(sumLen % 2) ? (sumArr[sumLen/2-1] + sumArr[sumLen/2])/2 : sumArr[(sumLen -1)/2];
    return middleNum;
};
var findMedianSortedArrays2 = function (n1, n2) {
    if (n1.length <= 0 && n2.length <= 0) return 0;
    const l1 = n1.length;
    const l2 = n2.length;
    const k = parseInt((l1 + l2) / 2);
    const numK1 = n1[parseInt(k / 2) - 1];
}
const num1 = findMedianSortedArrays2([3, 5, 8, 9, 10], [2, 3]);
console.log();