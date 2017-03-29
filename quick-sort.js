// Program to sort an array using recursion
function quickSort(arr) {
	if(arr.length == 0) {
		return [];
	}
	var left = [], right = [], pivot = arr[0];
	for(var i = 1; i < arr.length; i++) {
		if(arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return quickSort(left).concat(pivot, quickSort(right));
}

// test case
// expect output to be [1, 2, 3, 4, 5]
console.log(quickSort([5, 4, 3, 2, 1]));