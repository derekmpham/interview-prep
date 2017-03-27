"use strict";

// Create a stack class
function Stack() {
	this.top = null;
}

// push value into stack
Stack.prototype.push = function(val) {
	this.top = {
		data: val,
		next: this.top
	};
};

// pop value from stack
Stack.prototype.pop = function() {
	var top = this.top;
	if(top) {
		var popData = top.data;
		// next value becomes new top
		this.top = top.next;
		return popData;
	}
	return;
};

// test cases
var testStack = new Stack();
testStack.push(1);
testStack.push(2);
testStack.push(3);
testStack.push(4);
// expect to print out 4
console.log(testStack.pop());
// expect to print out 3
console.log(testStack.pop());
