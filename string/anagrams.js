// Program that returns true if two strings are anagrams of one another

function isAnagram(firstStr, secondStr) {
	// lower case both strings to account for case insensitivity
	var a = firstStr.toLowerCase(),
		b = secondStr.toLowerCase();

	// sort strings and join each resulting array to a string
	a = a.split("").sort().join("");
	b = b.split("").sort().join("");

	// compare results
	if (a === b) {
		return true;
	} else {
		return false;
	}
}

// test case
var testOne = "army";
var testTwo = "Mary";
isAnagram(testOne, testTwo); // expect to return true

var testThree = "mash";
var testFour = "smash";
isAnagram(testThree, testFour); // expect to return false
