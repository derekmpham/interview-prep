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

// function to make array heap tree
function heapify(arr, len) {
	// break array into root and two sides to create heap tree
	var middle = Math.floor((len - 2)/2);
	while (middle >= 0) {
		siftDown(arr, middle--, len - 1);
	}
}

function siftDown(arr, start, end) {
	var rootNode = start,
		child = rootNode * 2 + 1,
		nodeToSwap = rootNode;

	while (child <= end) {
		if (arr[nodeToSwap] < arr[child]) {
			swap(arr, nodeToSwap, child);
		}

		if (child + 1 <= end && arr[nodeToSwap] < arr[child + 1]) {
			swap(arr, nodeToSwap, child + 1);
		}

		if (nodeToSwap != rootNode) {
			swap(arr, rootNode, nodeToSwap);
			rootNode = nodeToSwap;
		}

		else {
			return;
		}

		nodeToSwap = rootNode;
		child = rootNode * 2 + 1;
	}
}

function swap(arr, i, j) {
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

// test case
heapSort([5, 4, 3, 2, 1]);
