// Program to remove duplicates of array and return array of only unique elements

function uniqueElements(arr) {
	var hashmap = {}; // to be used as reference table
	var unique = []; // array to be returned

	for (var i = 0; i < arr.length; i++) {
		// if key returns undefined (unique), it is evaluated as false
		if (!hashmap.hasOwnProperty(arr[i])) { // if element does not exist in hash
			hashmap[arr[i]] = 1; // add element to hash table as key (and assign random number 1 as value)
			unique.push(arr[i]); // push element into unique array
		}
	}
	return unique;
}

// test case
var test = [1, 2, 3, 4, 1, 2, 2, 3];
uniqueElements(test); // expect [1, 2, 3, 4]
