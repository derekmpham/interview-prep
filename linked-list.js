"use strict";

// Create a linked list class

class LinkedList {
	constructor() {
		this.head = null;
	}

	// add node to linked list function
	addNodeToTail(val) {
		var node = {
			data: val,
			next: null
		};
		// if linked list is empty
		if (!this.head) {
			this.head = node;
		} else {
			// if not empty
			var p1 = this.head;
			while (p1.next) {
				p1 = p1.next;
			}
			p1.next = node;
		}
	}

	// remove node from linked list function
	deleteNode(val) {
		// if linked list is empty
		if (!this.head) {
			console.log("Linked list is empty");
			return;
		}
		// if trying to remove head from linked list
		if (this.head.data === val) {
			this.head = this.head.next;
		} else {
			// removing any other node from linked list
			var p1 = this.head;
			var p2 = p1.next;
			while (p2) {
				if (p2.data === val) {
					p1.next = p2.next;
					break;
				} else {
					p1 = p2;
				}
				p2 = p2.next;
			}
		}
	}
}


// test cases
// create instance of LinkedList class
var listOne = new LinkedList();

// create linked list with 5 nodes
listOne.addNodeToTail(1);
listOne.addNodeToTail(2);
listOne.addNodeToTail(3);
listOne.addNodeToTail(4);
listOne.addNodeToTail(5);
console.log(listOne);

// delete head and tail nodes
listOne.deleteNode(1);
listOne.deleteNode(5);
// expect linked list to have 3 nodes
console.log(listOne);

// delete node in middle of linked list
listOne.deleteNode(3);
console.log(listOne);


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
		deleteNode = null;

	// first case: invalid position
	if (position < 0 || position > length) {
		throw new Error(message.failure);
	}

	// second case: first node is removed
	if (position === 1) {
		this.head = currentNode.next; // head reassigned
		deleteNode = currentNode;
		currentNode = null;
		this._length--;

		return deleteNode;
	}

	// third case: any other node is removed
	while (count < position) { // loop until we reach node at position we want to remove
		beforeNodeToDelete = currentNode;
		nodeToDelete = currentNode.next;
		count++;
	}

	beforeNodeToDelete.next = nodeToDelete.next;
	deleteNode = nodeToDelete;
	nodeToDelete = null;
	this._length--;

	return deleteNode;
};
