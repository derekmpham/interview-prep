// Program that identifies common element(s) that exist within both two arrays

function intersection(firstArray, secondArray) {
	var hashMap = {};
	var commonElements = [];

	// create hashmap with elements of first array as keys
	firstArray.forEach(function(element) {
		hashMap[element] = 1;
	})

	// use hashmap's O(1) look up time to check if an element in second array exists in the hash (i.e. first array)
	secondArray.forEach(function(element) { // iterate through entire second array
		if (hashMap[element] === 1) { // if element in second array exists in hashmap
			commonElements.push(element); // add matching element into output array
			hashMap[element]++; // implement counter to keep track of what we already added
		}
	});

	return commonElements; // return output array
}

// test case
var arrOne = [1, 2, 3, 4];
var arrTwo = [3, 4, 5, 6];

// expect [3, 4] to be returned
intersection(arrOne, arrTwo);
