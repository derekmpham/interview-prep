// Program to find largest product yielded from three integers

function sortIntegers(a, b) {
	return a - b;
}

function largestProduct(unsortedArray) {
	var sortedArray = unsortedArray.sort(sortIntegers),
		productOne = 1,
		productTwo = 1,
		lastElementIndex = sortedArray.length - 1;

	// get product of three largest integers in sorted array
	for (var i = lastElementIndex; i > lastElementIndex - 3; i--) {
		productOne = productOne * sortedArray[i];
	}
}
