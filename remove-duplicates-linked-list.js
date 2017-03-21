"use strict";

// Program to remove duplicates from unsorted linked list

// create linked list class
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

		if (!this.head) {
			this.head = node;
		} else {
			var p1 = this.head;
			while (p1.next) {
				p1 = p1.next;
			}
			p1.next = node;
		}
	}

	// remove node from linked list function
	deleteNode(val) {
		if (!this.head) {
			console.log("Linked list is empty");
			return;
		}

		if (this.head.data === val) {
			this.head = this.head.next;
		} else {
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


// remove duplicates from linked list function
LinkedList.prototype.removeDuplicates = function() {
	// if linked list is empty or only has one single node
	if (!this.head || !this.head.next) {
		console.log("No duplicates were found: empty or single node in linked list");
		return;
	}

	var p1;
	var p2;
	var p3;
	var val;
	p2 = this.head;
	while (p2) {
		val = p2.data;
		p1 = p2;
		p3 = p1.next;
		while (p3) {
			if (p3.data === val) {
				p1.next = p3.next;
			} else {
				p1 = p3;
			}
			p3 = p3.next;
		}
		p2 = p2.next;
	}
};

// test cases
// test case for no duplicates (base case)
var firstList = new LinkedList();
firstList.addNodeToTail(8);
// expect "No duplicates were found: empty or single node in linked list"
firstList.removeDuplicates();
console.log(firstList);

// test case for two nodes with duplicates
var secondList = new LinkedList();
secondList.addNodeToTail(8);
secondList.addNodeToTail(8);
secondList.removeDuplicates();
// expect to have only one node left
console.log(secondList);

// test case for two nodes without duplicates
var thirdList = new LinkedList();
thirdList.addNodeToTail(8);
thirdList.addNodeToTail(9);
thirdList.removeDuplicates();
// expect to still have two nodes
console.log(thirdList);

// test case for removing duplicates at end of linked list
var fourthList = new LinkedList();
fourthList.addNodeToTail(1);
fourthList.addNodeToTail(2);
fourthList.addNodeToTail(3);
fourthList.addNodeToTail(4);
fourthList.addNodeToTail(1);
fourthList.removeDuplicates();
// expect to have only four nodes left
console.log(fourthList);

// test case for removing multiple duplicates from middle of linked list
var fifthList = new LinkedList();
fifthList.addNodeToTail(1);
fifthList.addNodeToTail(2);
fifthList.addNodeToTail(1);
fifthList.addNodeToTail(1);
fifthList.addNodeToTail(3);
fifthList.removeDuplicates();
// expect to have only three nodes left
console.log(fifthList);
