// Implement merge sort: "divide and conquer" algorithm using recursion


function mergeSort(arr) {
	if (arr.length < 2) {
		return arr;
	}

	var middle = parseInt(arr.length / 2),
		left = arr.slice(0, middle),
		right = arr.slice(middle, arr.length);

	return merge(mergeSort(left), mergeSort(right));
}
