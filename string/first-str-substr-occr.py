# Implement a function that takes two strings, s and x, as arguments and finds the first occurrence of the string x in s. The function should return an integer indicating the index in s of the first occurrence of x. If there are no occurrences of x in s, return -1

def find_substring(string, substr):
	if len(substr) >= 1 and len(string) >= len(substr):
		substr_hash = 0
		string_hash = 0

		for j in range(len(substr)):
			string_hash += ord(string[j])
			substr_hash += ord(substr[j])

		for i in range(0, len(string) - len(substr) + 1):
			if string_hash == substr_hash and string[i:i+len(substr)] == substr:
				return i
			# rolling hash
			if i + len(substr) < len(string):
				string_hash = string_hash - ord(string[i]) + ord(string[i + len(substr)])

	return -1


# test cases
# test 1
string = "Hello"
substr = "eo"
assert find_substring(string, substr) == -1

# test 2
string = "Hello"
substr = "el"
assert find_substring(string, substr) == 1

# test 3
string = "a"
substr = "a"
assert find_substring(string, substr) == 0

# test 4
string = "a"
substr = "A"
assert find_substring(string, substr) == -1

# test 5
string = "sst"
substr = "st"
assert find_substring(string, substr) == 1

# test 6
string = "lrnkbldxguzgcseccinlizyogwqzlifxcthdgmanjztlt"
substr = "an"
assert find_substring(string, substr) == 38

# test 7
string = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaa"
substr = "ab"
assert find_substring(string, substr) == 31

# test 8
string = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
substr = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"
assert find_substring(string, substr) == -1
