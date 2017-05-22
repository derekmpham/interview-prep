// Perform binary search using recursion

function binarySearch(arr, val, leftPosition, rightPosition) {

	// value does not exist
	if (leftPosition > rightPosition) {
		return -1;
	}

	var middlePivot = Math.floor((leftPosition + rightPosition) / 2);
	if (arr[middlePivot] === val) {
		return middlePivot;
	}

}
