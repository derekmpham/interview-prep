# Implement a function that takes two strings, s and x, as arguments and finds the first occurrence of the string x in s. The function should return an integer indicating the index in s of the first occurrence of x. If there are no occurrences of x in s, return -1

def find_substring(string, substr):
	string_len = len(string)
	substr_len = len(substr)
	j = 0

	if substr_len >= 1:
		i = 0
		while i < string_len:
			if string[i] == substr[j]:
				j += 1
				if j == substr_len:
					return i - substr_len
				else:
					j = 0
			i += 1
		

	return -1


# test cases
# test 1
string = "Hello"
substr = "eo"
print find_substring(string, substr)


