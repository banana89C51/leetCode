
var CQueue = function () {
    this.s1 = []; //真正存储数据
    this.s2 = []; //用于中转数据
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
    // s1 全部转入 s2
    while (this.s1.length) {
        this.s2.push(this.s1.pop());
    }
    // s2 push 元素
    this.s2.push(value);

    // s2 全部转入s1
    while (this.s2.length) {
        this.s1.push(this.s2.pop());
    }
    return null;
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
    if (!this.s1.length) return -1;
    // s1 pop
    return this.s1.pop();
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

var obj = new CQueue()
obj.appendTail(1);
var param_2 = obj.deleteHead()