// Program to reverse each word in a sentence

function reverseBySeparator(str, separator) {
	return str.split(separator).reverse().join(separator);
}

// test case
var testString = "Hey dude!";
// reverse entire sentence
var reverseSentence = reverseBySeparator(testString, ""); // expect to return !edud yeH

// reverse each word
reverseBySeparator(reverseSentence, " "); // expect to return yeH !edud
