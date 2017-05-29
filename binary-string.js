// Returns binary string of given decimal number

function decimalToBinary(num) {
	if (num >= 1) {
		if (num % 2) { // if decimal number is not divisible by 2, then recursively return proceeding binary of the digit minus 1, and then add 1 for the leftover 1 digit
			return decimalToBinary((num - 1)/2) + 1;
		} else {
			return decimalToBinary(num/2) + 0; // recursively return proceeding binary digits
		}
	} else {
		return '';
	}
}

// test cases
decimalToBinary(3); // expect to return "11"
decimalToBinary(8); // expect to return "1000"
decimalToBinary(1000) // expect to return "1111101000"
