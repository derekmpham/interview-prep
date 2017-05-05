"use strict";

// DOUBLY-LINKED LIST

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




















