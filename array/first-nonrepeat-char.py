# Given a string s, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'
# function only iterates over the string once and uses O(1) additional memory
# input string contains only lowercase English letters

def first_non_repeating_character(s):
	chars_in_str = []
	dup_list = {}

	for i in range(len(s)): # fill character reference array and identify repeating characters in string
		if s[i] in chars_in_str:
			dup_list[s[i]] = 1
		else:
			chars_in_str.append(s[i])

	for j in chars_in_str: # find first non-repeating character
		if not dup_list.has_key(j):
			return j

	return '_'


# test cases
print first_non_repeating_character("abacabad") # prints "c"
print first_non_repeating_character("abacabaabacaba") # prints "_"
