# Return true if two strings are anagrams of one another

def is_anagram(str_one, str_two):
	# lower case both strings to account for case insensitivity
	a = str_one.lower()
	b = str_two.lower()

	# convert strings into lists and sort each
	a = list(a)
	b = list(b)

	# sort lists
	a.sort()
	b.sort()

	# consolidate lists into strings
	a = "".join(a)
	b = "".join(b)

	# compare sorted strings
	if a == b:
		print True
	else:
		print False


# test cases
word_one = "pea"
word_two = "Ape"
is_anagram(word_one, word_two) # returns true

word_three = "arm"
word_four = "mary"
is_anagram(word_three, word_four) # returns false
