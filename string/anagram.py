# Return true if two strings are anagrams of one another

def is_anagram(str_one, str_two):
	# lower case both strings to account for case insensitivity
	a = str_one.lower()
	b = str_two.lower()

	# convert strings into lists and sort each
	a = list(a).sort()
	b = list(b).sort()

	# convert lists back into strings
	a = "".join(a)
	b = "".join(b)

	# compare sorted strings
	if a == b:
		return true
	else:
		return false






