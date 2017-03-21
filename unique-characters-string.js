// Program to determine if string has all unique characters

function isUnique(str) {
	var hash = {};
	var test = true;
	for (i = 0; i < str.length; i++) {
		// if character exists in hash, return false (i.e. identify string as not unique)
		if (str[i] in hash) {
			test = false;
		} else {
			// add character to hash table as key (and assign random number 1 as value)
			hash[str[i]] = 1;
		}
	}
	return test;
}

// case for returning true
console.log(isUnique("cab"));

// case for returning false
console.log(isUnique("javascript"));
