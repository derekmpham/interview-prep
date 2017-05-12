// Program to determine if string is a palindrome

function checkPalindrome(str) {

	// identify non-alphanumeric characters through regular expression
	var regEx = /[^A-Za-z0-9]/g;

	// lower case all characters in string and remove all non-alphanumeric characters
	var lowCaseReg = str.toLowerCase().replace(regEx, '');

	// check for palindrome with loop
	for (var i = 0; i < (lowCaseReg.length)/2; i++) {
		if (lowCaseReg[i] !== lowCaseReg[(lowCaseReg.length) - 1 - i]) { // loop will go on as long as characters match
			return false;
		}
	}
	return true; // string is palindrome
}

// test cases
checkPalindrome("racecar"); // expect true
checkPalindrome("race car"); // expect true
checkPalindrome("nope"); // expect false
checkPalindrome("not palindrome"); // expect false
checkPalindrome("A man, a plan, a canal. Panama"); // expect true
checkPalindrome("0_0 (: /-\ :) 0_0"); // expect true
