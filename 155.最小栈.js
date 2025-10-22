
var MinStack = function() {
    this.x_stack = [];
    this.min_stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.x_stack.push(val);
    this.min_stack.push(Math.min(this.min_stack[this.min_stack.length - 1], val));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.x_stack.pop();
    this.min_stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.x_stack[this.x_stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min_stack[this.min_stack.length - 1];
};
