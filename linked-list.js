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
