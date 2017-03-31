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
		this.top = top.next;
		return popData;
	}
	return;
};


// create queue implemented with two stacks
function MyQueue() {
	// first stack (inbox)
	this.inbox = new Stack();
	// second stack (outbox)
	this.outbox = new Stack();
}

// push object into queue (enqueue)
MyQueue.prototype.enqueue = function(obj) {
	this.inbox.push(obj);
}

// pop object from queue (dequeue) and return it
MyQueue.prototype.dequeue = function() {
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
testQueue.enqueue(1);
testQueue.enqueue(2);
testQueue.enqueue(3);
testQueue.enqueue(4);
testQueue.enqueue(5);
// expect queue to have all five elements in inbox stack
console.log(testQueue);
testQueue.dequeue();
testQueue.dequeue();
testQueue.dequeue();
// expect to only have two elements left in outbox stack
console.log(testQueue);
