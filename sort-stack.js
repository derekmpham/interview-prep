"use strict";

// Program that sorts a stack such that smallest items are on top

// create Stack class
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
		this.top = top.next;
		return popData;
	}
	return;
};

// sort stack in ascending order (main function in exercise)
Stack.prototype.sort = function() {
	// create output stack
	var stackTwo = new Stack();

	// while first stack is not empty
	while(this.top) {
		var placeHolder = this.pop();

		while(stackTwo.top && stackTwo.top.data < placeHolder) {
			// push the top element in output stack (larger value) into original stack
			this.push(stackTwo.pop());
		}
		// push element in placeholder into output stack
		stackTwo.push(placeHolder);
	}
	console.log(stackTwo);
};


// test cases
var testStack = new Stack();
testStack.push(1);
testStack.push(2);
testStack.push(3);
testStack.push(4);
testStack.push(5);
// expect 5 to be at top of stack
console.log(testStack);
testStack.sort();
