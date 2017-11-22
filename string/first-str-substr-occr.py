# Implement a function that takes two strings, s and x, as arguments and finds the first occurrence of the string x in s. The function should return an integer indicating the index in s of the first occurrence of x. If there are no occurrences of x in s, return -1

def find_substring(string, substr):
	string_len = len(string)
	substr_len = len(substr)
	j = 0

	if substr_len >= 1:
		for i in range(0, string_len):
			if string[i] == substr[j]:
				if j == substr_len - 1:
					return i - substr_len + 1
				j += 1
			else:
				j = 0
			i += 1

	return -1


# test cases
# test 1
string = "Hello"
substr = "eo"
print find_substring(string, substr) # -1

# test 2
string = "Hello"
substr = "el"
print find_substring(string, substr) # 1

# test 3
string = "a"
substr = "a"
print find_substring(string, substr) # 0


