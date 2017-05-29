// Returns binary string of given decimal number

function decimalToBinary(num) {
	if (num >= 1) {
		if (num % 2) { // if decimal number is not divisible by 2, then recursively return proceeding binary of the digit minus 1, and then add 1 for the leftover 1 digit
			return decimalToBinary((num - 1)/2) + 1;
		}
	}
}
