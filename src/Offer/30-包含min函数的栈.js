/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stack = null;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    var node = { val: x, next: null, min: x };
    node.next = this.stack;
    this.stack = node;
    if (!node.next || x < node.next.min) {
        node.min = x;
    } else {
        node.min = node.next.min;
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    const node = this.stack;
    this.stack = this.stack.next;
    return node.val;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    if (!this.stack) return null;
    return this.stack.val;
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
    if (!this.stack) return null;
    return this.stack.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
