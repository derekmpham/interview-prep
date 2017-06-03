
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
}

function peekStack(stack) {
	return stack[stack.length - 1];
}

function findIntersection(linkedlistOne, linkedlistTwo) {
	var headOne = linkedlistOne.head,
		headTwo = linkedlistTwo.head,
		stackOne = [],
		stackTwo = [],
		intersect;

	while (headOne !== null) {
		stackOne.push(headOne);
		headOne = headOne.next;
	}

	while (headTwo !== null) {
		stackTwo.push(headTwo);
		headTwo = headTwo.next;
	}

	console.log(stackOne);
	console.log(peekStack(stackOne));
	console.log(stackTwo);
	console.log(peekStack(stackTwo));

	if (stackOne.length === 0 || stackTwo.length ===0) { // if either stack/linked list is empty
		intersect = undefined;
	} else if (peekStack(stackOne) !== peekStack(stackTwo)) { // if no intersection
		intersect = undefined;
		console.log("ELSE IF STATEMENT");
	} else { // if there is an intersection
		while (peekStack(stackOne) === peekStack(stackTwo)) {
			intersect = peekStack(stackOne);
			stackOne.pop();
			stackTwo.pop();
		}
	}
	return intersect; // return intersecting node
}

// test case
var testOne = new LinkedList(),
	testTwo = new LinkedList();
	nodeOne = new Node(4);
	nodeTwo = new Node(5);
	nodeThree = new Node(6);

testOne.add(1);
testOne.add(2);
testOne.add(3);
testOne.add(nodeOne);
testOne.add(nodeTwo);

testTwo.add(2);
testTwo.add(3);
testTwo.add(nodeOne);
testTwo.add(nodeTwo);

findIntersection(testOne, testTwo); // expect to return testNode
