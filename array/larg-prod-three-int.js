// Program to find largest product yielded from three integers

function sortIntegers(a, b) {
	return a - b;
}

// largest product yield either max1 * max2 * max3 OR min1 * min2 * max1
function largestProduct(unsortedArray) {
	var sortedArray = unsortedArray.sort(sortIntegers),
		productOne = 1,
		productTwo = 1,
		lastElementIndex = sortedArray.length - 1;

	// get product of three largest integers in sorted array
	for (var i = lastElementIndex; i > lastElementIndex - 3; i--) {
		productOne = productOne * sortedArray[i]; // first case: max1 * max2 * max3
	}

	// second case: min1 * min2 * max1
	productTwo = sortedArray[0] * sortedArray[1] * sortedArray[lastElementIndex];

	// compare first and second cases and return larger product yield
	if (productOne > productTwo) {
		return productOne;
	}

	return productTwo;
}

// test case
largestProduct([-10, 7, 29, 30, 5, -10, -70]); // expect to return 21000
