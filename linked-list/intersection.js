// Determine if two singly linked lists intersect (return intersecting node)

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

LinkedList.prototype.add = function(val) {
	var node = new Node(val), // create new instance of node
		currentNode = this.head;

	// first case: if linked list is initially empty
	if (!currentNode) {
		this.head = node; // make new node head of linked list
		this._length++;

		return node;
	}

	// second case: if linked list is initially not empty
	while (currentNode.next) {
		currentNode = currentNode.next; // iterate through entire non-empty linked list to get to end of linked list
	}

	currentNode.next = node; // add new node to end of linked list

	this._length++;

	return node;
}








