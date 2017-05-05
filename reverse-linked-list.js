"use strict";

// REVERSE LINKED LIST

// first create linked list

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

// reverse linked list
LinkedList.prototype.reverse = function() {
	
	// if linked list is empty or only has one node
	if (!this.head || !this.head.next) {
		return this;
	}

	var nodes = [],
		currentNode = this.head;

	// store all nodes in array
	while (currentNode) {
		nodes.push(currentNode);
		currentNode = currentNode.next;
	}

	var reversedLinkedList = new LinkedList();

	// make last node in array head of reversed linked list
	reversedLinkedList.head = nodes.pop();
	currentNode = reversedLinkedList.head;

	// take out and store newly last node in array inside variable
	var node = nodes.pop();

	while (node) { // iterate until array is empty
		node.next = null; // make sure recently popped node is tail
		currentNode.next = node; // have recently popped node become next node in reversed linked list

		currentNode = currentNode.next; // move on to next node
		node = nodes.pop(); // again take out and store newly last node in array inside variable
	}

	return reversedLinkedList;
}

// test cases
var test = new LinkedList();
test.add(6);
test.add(7);
test.add(8);
test.add(9);
test.add(10);
console.log(test); // expect linked list with five nodes

test.reverse(); // expect linked list with value 10 as head
