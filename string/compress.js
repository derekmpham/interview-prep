// Method that performs basic string compression using the counts of repeated characters

function compressStr(str) {
	var output = "", // will return this variable as final compressed string
		currChar = "", // represents character we are searching for in string
		currCount = "", // counts number of times character is repeated
		// maxCount = ""; // maximum count

	// iterate through entire string
	for (i = 0; i < str.length; i++) {
		// if the character we are searching for in string matches the character being looked at
		if ( currChar !== str[i]) {
			output = output + currChar + currCount; // output is sum of the output we have so far plus the character we have been searching for in our string plus the number of times that character is repeated
			// maxCount = Math.max(maxCount, currCount); // choose the larger value between maxCount and currCount
			currChar = str[i]; // move on to the next character
			currCount = 1; // count resets to 1 since we have moved on to the next character
		} else { // if there is a match add to the repeated count
			currCount++;
		}

		output = output + currChar + currCount; // wrap up our final output by doing the same thing to what we did under the scenario where the character we are searching for in string matches the character being looked at
		// maxCount = Math.max(maxCount, currCount);

		return output;
	}
}






