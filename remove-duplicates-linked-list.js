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
