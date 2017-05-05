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

