// Program to determine if string is a palindrome

function checkPalindrome(str) {

	// identify non-alphanumeric characters through regular expression
	var regEx = /[^A-Za-z0-9]/g;

	// lower case all characters in string and remove all non-alphanumeric characters
	var lowCaseReg = str.toLowerCase().replace(regEx, '');
}
