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
