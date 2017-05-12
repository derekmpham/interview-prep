// Program to find largest product yielded from three integers

function sortIntegers(a, b) {
	return a - b;
}

function largestProduct(unsortedArray) {
	var sortedArray = unsortedArray.sort(sortIntegers),
		productOne = 1,
		productTwo = 1,
		index = sortedArray.length - 1;
}
