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

const num1 = findMedianSortedArrays([], [2,3]);
console.log();