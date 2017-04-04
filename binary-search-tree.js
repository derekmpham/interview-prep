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

BinarySearchTree.prototype.push = function(val){
	var rootNode = this.root;

	if(!rootNode){
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
