// Program that creates a binary search tree: each node has up to two children, and all left descendants of a node is less than or equal to the node and all right descendants are greater than the node

// create node class
function Node(val) {
	this.value = val;
	this.left = null;
	this.right = null;
}

// create constructor for binary search tree
function BinarySearchTree() {
	this.root = null;
}

// function for inserting value into appropriate location in tree
BinarySearchTree.prototype.push = function(val){
	var rootNode = this.root;

	// if there is no root node
	if(!rootNode){
		// make pushed value root node
		this.root = new Node(val);
		return;
	}

	var currentNode = rootNode;
	var newNode = new Node(val);

	while(currentNode){
		if(val < currentNode.value){
			if(!currentNode.left){
				currentNode.left = newNode;
				break;
			} else {
				currentNode = currentNode.left;
			}
		} else {
			if(!currentNode.right) {
				currentNode.right = newNode;
				break;
			} else {
				currentNode = currentNode.right;
			}
		}
	}
}

// test case
var testTree = new BinarySearchTree();
testTree.push(4);
testTree.push(9);
testTree.push(2);
testTree.push(7);
testTree.push(3);
// expect 4 to be root node, 2 to be left child and 9 to be right child of 4, 7 to be left child of 9, and 3 to be right child of 2
console.log(testTree);







