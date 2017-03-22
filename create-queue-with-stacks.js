// Program that uses 2 stacks to implement MyQueue class

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
