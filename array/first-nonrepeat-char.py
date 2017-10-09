# Given a string s, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'
# function only iterates over the string once and uses O(1) additional memory
# input string contains only lowercase English letters

def first_non_repeating_character(s):
	char_in_str = []
	dup_list = {}

	for i in range(len(s)):
		if s[i] in char_in_str:
			dup_list[s[i]] = 1
		else:
			char_in_str.append(s[i])

	for j in char_in_str:
		if not dup_list.has_key(j):
			return j

	return '_'
