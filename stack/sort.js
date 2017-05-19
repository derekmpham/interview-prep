"use strict";

// Program that sorts a stack such that smallest items are on top

// create Stack class
function Stack() {
	this.top = null;
}

// push value into stack
Stack.prototype.push = function(val) {
	this.top = {
		data: val,
		next: this.top
	};
};

// pop value from stack
Stack.prototype.pop = function() {
	var top = this.top;
	if(top) {
		var popData = top.data;
		this.top = top.next;
		return popData;
	}
	return;
};

// first solution to sorting stack in ascending order (O(n) = n^2)
Stack.prototype.sort = function() {
	// create output stack
	var stackTwo = new Stack();

	// while first stack is not empty
	while(this.top) {
		var placeHolder = this.pop();

		while(stackTwo.top && stackTwo.top.data < placeHolder) {
			// push the top element in output stack (larger value) into original stack
			this.push(stackTwo.pop());
		}
		// push element in placeholder into output stack
		stackTwo.push(placeHolder);
	}
	console.log(stackTwo);
};

// second solution to sorting stack in ascending order (more efficient solution --> O(n) = nlog(n))
Stack.prototype.recurSort = function() {
	// create empty array for temporary storage of elements (purpose: create appropriate data structure to apply quicksort function)
	var placeHolder = [];

	// push all elements in stack into array
	while(this.top) {
		placeHolder.push(this.pop());
	}

	//quicksort function
	function quickSort(arr) {
		if(arr.length == 0) {
			return [];
		}
		// compare first element in array to the rest
		var left = [], right = [], pivot = arr[0];
		for(var i = 1; i < arr.length; i++) {
			// if element being looked at is less than first element, put it in left array--else put it in right array
			if(arr[i] < pivot) {
				left.push(arr[i]);
			} else {
				right.push(arr[i]);
			}
		}
		// apply recursion
		return quickSort(left).concat(pivot, quickSort(right));
	}

	// apply quicksort function on temporary array
	var sortedArr = quickSort(placeHolder);
	var stackTwo = new Stack();

	// push all elements of newly sorted array into new stack
	while(sortedArr[0]) {
		stackTwo.push(sortedArr.pop());
	}

	console.log(stackTwo);
}


// test cases
// first solution
var testStack = new Stack();
testStack.push(1);
testStack.push(2);
testStack.push(3);
testStack.push(4);
testStack.push(5);
// expect 5 to be at top of stack
console.log(testStack);
// now expect 1 to be at top of stack
testStack.sort();

// second solution using quicksort
var secondTest = new Stack();
secondTest.push(6);
secondTest.push(7);
secondTest.push(8);
secondTest.push(9);
secondTest.push(10);
// expect 10 to be at top of stack
console.log(secondTest);
// now expect 6 to be at top of stack
secondTest.recurSort();
