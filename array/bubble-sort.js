// Sort array by comparing each pair of adjacent elements and swapping them if they are in the wrong order

function bubbleSort(arr) {
	var len = arr.length;

	for (i = len - 1; i >= 0; i--) {
		for (j = 1; j <= i; j++) {
			if (arr[j-1] > arr[j]) {
				var temp = arr[j-1];
				arr[j-1] = arr[j];
				arr[j] = temp;
			}
		}
	}

	return arr;
}
