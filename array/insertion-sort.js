// Implement insertion sort algorithm: iterate through array and for each iteration, remove one element from input data, find the location it belongs within the sorted list, and insert it there

function insertionSort(arr) {
	for (i = 0; i < arr.length; i++) {
		var temp = arr[i],
			j = i - 1;

		while (j >= 0 && arr[j] > temp) {
			arr[j + 1] = arr[j];
			j--;
		}

		arr[j + 1] = temp;
	}

	return arr;
}

// test case
var test = [5, 4, 3, 2, 1];
insertionSort(test);
