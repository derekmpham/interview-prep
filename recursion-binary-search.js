// Perform binary search using recursion

function binarySearch(arr, val, leftPosition, rightPosition) {

	// value does not exist
	if (leftPosition > rightPosition) {
		return -1;
	}

	// if value exists
	var middlePivot = Math.floor((leftPosition + rightPosition) / 2);
	if (arr[middlePivot] === val) {
		return middlePivot;
	} else if (arr[middlePivot] > value) {
		return binarySearch(arr, val, leftPosition, middlePivot - 1); // implement recursion
	} else {
		return binarySearch(arr, val, middlePivot + 1, rightPosition); // implement recursion
	}
}
