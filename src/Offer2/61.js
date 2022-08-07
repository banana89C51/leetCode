var Heap = function (flag) {
    this.heap = [];
    this.flag = flag; //0：小根 1：大根
};
Heap.prototype.init = function (arr) {
    if (!arr || !arr.length) return null;

    //adjust heap upward
    var curIndex, fatherIndex;
    for (var i = 0; i < arr.length; i++) {
        this.heap.push(arr[i]);
        if (!i) continue;

        curIndex = i;
        fatherIndex = curIndex % 2 ? (curIndex - 1) / 2 : (curIndex - 2) / 2;
        var circleFlag = this.flag
            ? fatherIndex >= 0 && this.heap[curIndex].num > this.heap[fatherIndex].num
            : fatherIndex >= 0 && this.heap[curIndex].num < this.heap[fatherIndex].num;
        while (circleFlag) {
            // exchange val
            this.heap[curIndex] = this.heap[curIndex] + this.heap[fatherIndex];
            this.heap[fatherIndex] =
                this.heap[curIndex] - this.heap[fatherIndex];
            this.heap[curIndex] = this.heap[curIndex] - this.heap[fatherIndex];
            // reset curIndex and fatherIndex
            curIndex = fatherIndex;
            fatherIndex =
                curIndex % 2 ? (curIndex - 1) / 2 : (curIndex - 2) / 2;
            circleFlag = this.flag
                ? fatherIndex >= 0 && arr[curIndex].num > arr[fatherIndex].num
                : fatherIndex >= 0 && arr[curIndex].num < arr[fatherIndex].num;
        }
    }
};
Heap.prototype.addNum = function (num) {
    this.heap.push(num);
    if (this.heap.length === 1) return;

    curIndex = this.heap.length - 1;
    fatherIndex = curIndex % 2 ? (curIndex - 1) / 2 : (curIndex - 2) / 2;
    var circleFlag = this.flag
        ? fatherIndex >= 0 && this.heap[curIndex].num > this.heap[fatherIndex].num
        : fatherIndex >= 0 && this.heap[curIndex].num < this.heap[fatherIndex].num;
    while (circleFlag) {
        // exchange val
        var tmp = this.heap[fatherIndex];
        this.heap[fatherIndex] = this.heap[curIndex];
        this.heap[curIndex] = tmp;
        // reset curIndex and fatherIndex
        curIndex = fatherIndex;
        fatherIndex =
            curIndex % 2 ? (curIndex - 1) / 2 : (curIndex - 2) / 2;
        circleFlag = this.flag
            ? fatherIndex >= 0 && this.heap[curIndex].num > this.heap[fatherIndex].num
            : fatherIndex >= 0 && this.heap[curIndex].num < this.heap[fatherIndex].num;
    }
}
Heap.prototype.pop = function () {
    if (!this.heap.length) {
        return null;
    }
    if (this.heap.length === 1) {
        return this.heap.pop();
    }
    //exchange head and tail
    var tmp = this.heap[this.heap.length - 1];
    this.heap[this.heap.length - 1] = this.heap[0];
    this.heap[0] = tmp;
    //delete tail
    var ret = this.heap.pop();
    // adjust head
    var curIndex = 0;
    var leftIndex = 2 * curIndex + 1;
    var rightIndex = leftIndex + 1;
    var adjustIndex;
    while (leftIndex < this.heap.length) {
        if (this.flag) {
            // big heap
            if (this.heap[curIndex].num < this.heap[leftIndex].num ||
                (rightIndex < this.heap.length && this.heap[curIndex].num < this.heap[rightIndex].num)) {
                adjustIndex = rightIndex < this.heap.length ? (this.heap[leftIndex].num > this.heap[rightIndex].num ? leftIndex : rightIndex) : leftIndex;
            } else {
                break;
            }
        } else {
            // small heap
            if (this.heap[curIndex].num > this.heap[leftIndex].num ||
                (rightIndex < this.heap.length && this.heap[curIndex].num > this.heap[rightIndex].num)) {
                adjustIndex = rightIndex < this.heap.length ? (this.heap[leftIndex].num < this.heap[rightIndex].num ? leftIndex : rightIndex) : leftIndex;
            } else {
                break;
            }
        }
        // adjust tree downward
        var tmp = this.heap[adjustIndex];
        this.heap[adjustIndex] = this.heap[curIndex];
        this.heap[curIndex] = tmp;
        // reset curIndex、leftIndex、rightIndex
        curIndex = adjustIndex;
        leftIndex = 2 * curIndex + 1;
        rightIndex = leftIndex + 1;
    }
    return ret;
}
Heap.prototype.len = function () {
    return this.heap.length;
}
Heap.prototype.top = function () {
    return this.heap.length ? this.heap[0] : null;
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
 var kSmallestPairs = function(nums1, nums2, k) {
    var smallHeap = new Heap(0);
    var markMap = new Map();
    markMap.set('0-0', true); //下标数对
    smallHeap.addNum({
        couple: [nums1[0], nums2[0]],
        num: nums1[0] + nums2[0],
        indexArr: [0,0]
    });
    var res = [];
    var index1;
    var index2;
    var len1 = nums1.length;
    var len2 = nums2.length;
    while(res.length < k && smallHeap.len()){
        var obj = smallHeap.pop();
        index1 = obj.indexArr[0];
        index2 = obj.indexArr[1];
        res.push(obj.couple);
        if(res.length === k) return res;
        if(index2 + 1 < len2 && !markMap.has(String(index1)+ '-' + String(index2 + 1))){
            smallHeap.addNum({
                couple: [nums1[index1], nums2[index2 + 1]],
                num: nums1[index1] + nums2[index2 + 1],
                indexArr: [index1, index2 + 1]
            });
            markMap.set(String(index1)+ '-' + String(index2 + 1), true);
        }
        if(index1 + 1 < len1 && !markMap.has(String(index1 + 1)+ '-' + String(index2))){
            smallHeap.addNum({
                couple: [nums1[index1 + 1], nums2[index2]],
                num: nums1[index1 + 1] + nums2[index2],
                indexArr: [index1 + 1, index2]
            });
            markMap.set(String(index1 + 1)+ '-' + String(index2), true);
        }
    }
    return res;
};

var nums1 = [1,2];
var nums2 = [3];
var k = 3;

var res = kSmallestPairs(nums1, nums2, k);