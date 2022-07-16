/**
 * initialize your data structure here.
 */
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
            ? fatherIndex >= 0 && this.heap[curIndex] > this.heap[fatherIndex]
            : fatherIndex >= 0 && this.heap[curIndex] < this.heap[fatherIndex];
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
                ? fatherIndex >= 0 && arr[curIndex] > arr[fatherIndex]
                : fatherIndex >= 0 && arr[curIndex] < arr[fatherIndex];
        }
    }
};
Heap.prototype.addNum = function (num) {
    this.heap.push(num);
    if (this.heap.length === 1) return;

    curIndex = this.heap.length - 1;
    fatherIndex = curIndex % 2 ? (curIndex - 1) / 2 : (curIndex - 2) / 2;
    var circleFlag = this.flag
        ? fatherIndex >= 0 && this.heap[curIndex] > this.heap[fatherIndex]
        : fatherIndex >= 0 && this.heap[curIndex] < this.heap[fatherIndex];
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
            ? fatherIndex >= 0 && this.heap[curIndex] > this.heap[fatherIndex]
            : fatherIndex >= 0 && this.heap[curIndex] < this.heap[fatherIndex];
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
    this.heap[0] = this.heap[0] + this.heap[this.heap.length - 1];
    this.heap[this.heap.length - 1] = this.heap[0] - this.heap[this.heap.length - 1];
    this.heap[0] = this.heap[0] - this.heap[this.heap.length - 1];
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
            if (this.heap[curIndex] < this.heap[leftIndex] ||
                (rightIndex < this.heap.length && this.heap[curIndex] < this.heap[rightIndex])) {
                adjustIndex = rightIndex < this.heap.length ? (this.heap[leftIndex] > this.heap[rightIndex] ? leftIndex : rightIndex) : leftIndex;
            } else {
                break;
            }
        } else {
            // small heap
            if (this.heap[curIndex] > this.heap[leftIndex] ||
                (rightIndex < this.heap.length && this.heap[curIndex] > this.heap[rightIndex])) {
                adjustIndex = rightIndex < this.heap.length ? (this.heap[leftIndex] < this.heap[rightIndex] ? leftIndex : rightIndex) : leftIndex;
            } else {
                break;
            }
        }
        // adjust tree downward
        this.heap[curIndex] = this.heap[curIndex] + this.heap[adjustIndex];
        this.heap[adjustIndex] = this.heap[curIndex] - this.heap[adjustIndex];
        this.heap[curIndex] = this.heap[curIndex] - this.heap[adjustIndex];
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

var MedianFinder = function () {
    this.smallHeap = new Heap(0);
    this.bigHeap = new Heap(1);
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    if (!this.smallHeap.len() && !this.bigHeap.len()) {
        this.bigHeap.addNum(num);
        return;
    }
    if (num <= this.bigHeap.top()) {
        this.bigHeap.addNum(num);

    } else {
        this.smallHeap.addNum(num);
    }
    this.adjustTwoHeap();
};

MedianFinder.prototype.adjustTwoHeap = function () {
    // always keep (bigHeap.len - smallHeap.len) <= 1
    while (this.bigHeap.len() - this.smallHeap.len() > 1 || this.bigHeap.len() - this.smallHeap.len() < 0) {
        if (this.bigHeap.len() - this.smallHeap.len() > 1) {
            this.smallHeap.addNum(this.bigHeap.pop());
        } else {
            this.bigHeap.addNum(this.smallHeap.pop());
        }
    }
}
/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    if (!this.smallHeap.len() && !this.bigHeap.len()) return null;
    var totalLen = this.smallHeap.len() + this.bigHeap.len();
    if (totalLen % 2) {
        return this.bigHeap.top();
    } else {
        return (this.bigHeap.top() + this.smallHeap.top()) / 2;
    }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var MedianFinder = new MedianFinder();
// var middle = MedianFinder.findMedian();
// console.log(middle);
for (var i = 0; i < arr.length; i++) {
    MedianFinder.addNum(arr[i]);
    var middle = MedianFinder.findMedian();
    console.log(middle);
}
