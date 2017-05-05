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
