"use strict";

// REMOVE DUPLICATES OF SINGLY LINKED LIST

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

// remove duplicates from linked list
LinkedList.prototype.removeDuplicates = function() {
	var currentNode = this.head,
		nextNode = currentNode.next,
		nodes = {}, // placeholder hash used to hold all nodes (purpose: reference to check for duplicates)
		message = {failure: 'Failure: empty or single node linked list'};

	// first case: empty or only one node in linked list
	if (!currentNode || !nextNode) {
		throw new Error(message.failure);
	}

	nodes[currentNode.data] = true;

	while (nextNode) { // go through entire linked list
		var data = nextNode.data;
		if (nodes[data]) { // if duplicate found in linked list
			currentNode.next = nextNode.next; // remove duplicate node
		} else {
			nodes[data] = true;
			currentNode = nextNode;
		}
		nextNode = nextNode.next;
	}
}

// test cases
var testOne = new LinkedList();
testOne.add(6);
testOne.add(7);
testOne.add(8);
testOne.add(9);
testOne.add(10);
testOne.removeDuplicates();
console.log(testOne); // expect no node to be removed

var testTwo = new LinkedList();
testTwo.add(6);
testTwo.add(7);
testTwo.add(8);
testTwo.add(9);
testTwo.add(8);
testTwo.removeDuplicates();
console.log(testTwo); // expect last node to be removed

var testThree = new LinkedList();
testThree.add(6);
testThree.add(7);
testThree.add(8);
testThree.add(8);
testThree.add(9);
testThree.add(10);
testThree.removeDuplicates();
console.log(testThree); // expect fourth node to be removed

var testFour = new LinkedList();
testFour.add(8);
testFour.removeDuplicates(); // expect error message
