"use strict";

// REVERSE DOUBLY-LINKED LIST

// first create doubly linked list

// define constructor
function Node(val) {
	this.data = val;
	this.previous = null;
	this.next = null;
}

function DoublyLinkedList() {
	this._length = 0;
	this.head = null;
	this.tail = null;
}

// add node to doubly linked list
DoublyLinkedList.prototype.add = function(val) {
	var node = new Node(val); // create new instance of node

	if(this._length) {
		this.tail.next = node;
		node.previous = this.tail; // account for bi-directional movement
		this.tail = node; // new node now tail
	} else { // if doubly linked list is empty
		this.head = node;
		this.tail = node;
	}

	this._length++;

	return node;
}

// search nodes at specific positions in doubly linked list
DoublyLinkedList.prototype.searchNodeAt = function(position) {
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
		// go through entire doubly linked list until currentNode is equal to position
		currentNode = currentNode.next;
		count++;
	}

	return currentNode;
};

// remove node from doubly linked list
DoublyLinkedList.prototype.remove = function(position) {
	var currentNode = this.head,
		length = this._length,
		count = 1,
		message = {failure: 'Failure: non-existent node in this list'},
		beforeNodeToDelete = null,
		nodeToDelete = null,
		deletedNode = null;

	// first case: invalid position
	if (length === 0 || position < 1 || position > length) {
		throw new Error(message.failure);
	}

	// second case: first node is removed
	if (position === 1) {
		this.head = currentNode.next;

		// if there is a second node
		if (!this.head) {
			this.head.previous = null;
		} else { // if there is no second node
			this.tail = null; // means that doubly linked list is now empty
		}

	// third case: last node is removed
	} else if (position === this._length) {
		this.tail = this.tail.previous;
		this.tail.next = null;

	// fourth case: middle node is removed
	} else {
		while (count < position) { // loop until we reach node at position we want to remove
			currentNode = currentNode.next;
			count++;
		}

		beforeNodeToDelete = currentNode.previous;
		nodeToDelete = currentNode;
		afterNodeToDelete = currentNode.next;

		beforeNodeToDelete.next = afterNodeToDelete;
		afterNodeToDelete.previous = beforeNodeToDelete;
		deletedNode = nodeToDelete;
		nodeToDelete = null;
	}

	this._length--;

	return message.success;
};

// reverse doubly linked list
DoublyLinkedList.prototype.reverse = function() {
	var currentNode = this.head,
		nextNode;

	// iterate through entire doubly linked list
	while (currentNode) {
		nextNode = currentNode.next;
		currentNode.next = currentNode.previous; // place node after currentNode before currentNode
		currentNode.previous = nextNode; // place node before currentNode after currentNode

		if (!nextNode) { // when we get to the tail of doubly linked list
			this.head = currentNode; // make tail head of doubly linked list
		}
		currentNode = nextNode; // move on to the next node
	}
	return this;
}
