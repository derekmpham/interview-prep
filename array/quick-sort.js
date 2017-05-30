// Program to sort an array using recursion

function quickSort(arr) {
	if(arr.length == 0) {
		return [];
	}
	var left = [], right = [], pivot = arr[0];
	// compare first element in array to the rest
	for(var i = 1; i < arr.length; i++) {
		// if element being looked at is less than first element, put it in left array--else put it in right array
		if(arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	// apply same loop to left and right arrays (broken down from original array) and merge them with pivot element, where left array lies to the left of pivot element and right array lies to the right of pivot element
	return quickSort(left).concat(pivot, quickSort(right));
}

// test case
// expect to return [1, 2, 3, 4, 5]
quickSort([5, 4, 3, 2, 1]);
