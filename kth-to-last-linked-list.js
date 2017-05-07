"use strict";

// FIND KTH TO LAST ELEMENT OF SINGLY LINKED LIST

// first create singly linked list

// define constructor
function Node(data) {
	this.data = data;
	this.next = null;
}

function LinkedList() {
	this._length = 0; // assign number of nodes in linked list
	this.head = null; // points to head of linked list (node at front of linked list)
}

// add node to linked list
LinkedList.prototype.add = function(val) {
	var node = new Node(val), // create new instance of node
		currentNode = this.head;

	// first case: if linked list is initially empty
	if (!currentNode) {
		this.head = node; // make new node head of linked list
		this._length++;

		return node;
	}

	// second case: if list linked is initially not empty
	while (currentNode.next) {
		currentNode = currentNode.next; // iterate through entire non-empty linked list to get to end of linked list
	}

	currentNode.next = node; // add new node to end of linked list

	this._length++;

	return node;
};

// search nodes at specific positions in linked list
LinkedList.prototype.searchNodeAt = function(position) {
	var currentNode = this.head,
		length = this._length,
		count = 1,
		message = {failure: 'Failure: non-existent node in this list'};

		// first case: invalid position
		if (length === 0 || position < 1 || position > length) {
			throw new Error(message.failure);
		}

		// second case: valid position
		while (count < position) {
			// go through entire linked list until currentNode is equal to position
			currentNode = currentNode.next;
			count++;
		}

		return currentNode; // here currentNode is equal to position
};

// remove node from linked list
LinkedList.prototype.remove = function(position) {
	var currentNode = this.head,
		length = this.length,
		count = 0,
		message = {failure: 'Failure: non-existent node in this list'},
		beforeNodeToDelete = null,
		nodeToDelete = null,
		deletedNode = null;

	// first case: invalid position
	if (position < 0 || position > length) {
		throw new Error(message.failure);
	}

	// second case: first node is removed
	if (position === 1) {
		this.head = currentNode.next; // head reassigned
		deletedNode = currentNode;
		currentNode = null;
		this._length--;

		return deletedNode;
	}

	// third case: any other node is removed
	while (count < position) { // loop until we reach node at position we want to remove
		beforeNodeToDelete = currentNode;
		nodeToDelete = currentNode.next;
		count++;
	}

	beforeNodeToDelete.next = nodeToDelete.next;
	deletedNode = nodeToDelete;
	nodeToDelete = null;
	this._length--;

	return deletedNode;
};

// return kth to last
LinkedList.prototype.kthToLast = function(k) {
	var node = this.head,
		i = 1,
		kthNode,
		message = {failure: 'Failure: non-existent node in this list'};

	// first case: if k is less than 0 or greater than length of linked list
	if (k <= 0 || k > this._length) {
		throw new Error(message.failure);
	}

	// second case: if k is any other value
	while (node) { // go through linked list to find where k is
		if (i == k) {
			kthNode = this.head; // cuts linked list making from kth node become head node (becomes solution)
		} else if (i-k > 0) {
			kthNode = kthNode.next;
		}
		i++;

		node = node.next; // move on search
	}

	return kthNode;
}


// test cases
var test = new LinkedList();
test.add(6);
test.add(7);
test.add(8);
test.add(9);
test.add(10);
console.log(test); // expect linked list with five nodes

test.kthToLast(-1); // expect error message
test.kthToLast(0); // expect error message
test.kthToLast(8); // expect error message
test.kthToLast(1); // expect node with value 10 to be returned
test.kthToLast(3); // expect node with value 8 to be returned
test.kthToLast(5); // expect node with value 6 to be returned
