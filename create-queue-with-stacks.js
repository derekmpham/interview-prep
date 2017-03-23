"use strict";

// Program that uses 2 stacks to implement MyQueue class

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


// create queue implemented with two stacks
function MyQueue() {
	// first stack (inbox)
	this.inbox = [];
	// second stack (outbox)
	this.outbox = [];
}

// push object into queue
MyQueue.prototype.push = function(obj) {
	this.inbox.push(obj);
}

// pop object from queue and return it
MyQueue.prototype.pop = function() {
	// if second stack is empty, make sure fill up second stack before popping (objective: reverse order in first stack)
	if(!this.outbox.length) {
		// if first stack is empty
		if(!this.inbox.length) {
			return undefined;
		}
		// while first stack is not empty
		while(this.inbox.length) {
			this.outbox.push(this.inbox.pop());
		}
	}
	return this.outbox.pop();
};


// test cases
var testQueue = new MyQueue();
testQueue.pop(1);
testQueue.pop(2);
testQueue.pop(3);
testQueue.pop(4);
testQueue.pop(5);
console.log(testQueue);




