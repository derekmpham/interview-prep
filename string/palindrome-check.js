// Program to determine if string is a palindrome

function checkPalindrome(str) {

	// identify non-alphanumeric characters through regular expression
	var regEx = /[^A-Za-z0-9]/g;

	// lower case all characters in string and remove all non-alphanumeric characters
	var lowCaseReg = str.toLowerCase().replace(regEx, '');

	// check for palindrome with loop
	for (var i = 0; i < (str.length)/2; i++) {
		if (str[i] !== str[(str.length) - 1 - i]) { // loop will go on as long as characters match
			return false;
		}
	}
	return true; // string is palindrome
}
