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
		top = top.next;
		return popData;
	}
	return;
};

// sort stack in ascending order (main function in exercise)
Stack.prototype.sort = function() {
	var stackTwo = new Stack();

	while(this.top) {
		var placeHolder = this.pop();

		while(stackTwo.top && stackTwo.top.data > placeHolder) {
			stackOne.push(stackTwo.pop());
		}
		stackTwo.push(placeHolder);
	}
	console.log(stackTwo);
};









