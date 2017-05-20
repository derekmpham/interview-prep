// Check if two strings are isomorphic

function isIsomorphic(stringOne, stringTwo) {
	
	// check if strings are of the same length (if not, cannot be isomorphic)
	if (stringOne.length !== stringTwo.length) {
		return false;
	}

	var letterMap = {};

	for (i = 0; i < stringOne.length; i++) {
		var letterA = stringOne[i],
			letterB = stringTwo[i];

		// if the letter does not exist, create a map and map it to the value of the second letter
		if (letterMap[letterA] === undefined) {
			letterMap[letterA] = letterB;
		}
	}


}














