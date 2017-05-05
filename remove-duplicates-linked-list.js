"use strict";

// LINKED LIST

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
		nodes = {},
		message = {failure: 'Failure: empty or single node linked list'};

	// first case: empty or only one node in linked list
	if (!currentNode || !nextNode) {
		throw new Error(message.failure);
	}

	
}

















