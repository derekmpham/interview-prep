// Sort array using heap sort

// main heap sort function
function heapSort(arr) {
	var len = arr.length,
		end = len - 1;

	heapify(arr, len);

	while (end > 0) {
		swap(arr, end--, 0);
		siftDown(arr, 0, end);
	}

	return arr;
}
