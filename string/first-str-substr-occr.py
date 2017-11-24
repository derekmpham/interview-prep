# Implement a function that takes two strings, s and x, as arguments and finds the first occurrence of the string x in s. The function should return an integer indicating the index in s of the first occurrence of x. If there are no occurrences of x in s, return -1

def find_substring(string, substr):
	if len(substr) >= 1:
		for i in range(0, len(string)):
			if string[i:i+len(substr)] == substr:
				return i
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

# test 4
string = "a"
substr = "A"
print find_substring(string, substr) # -1

# test 5
string = "sst"
substr = "st"
print find_substring(string, substr) # 1
