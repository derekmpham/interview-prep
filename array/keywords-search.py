# find position of keywords array (order of words in array doesn't matter) in search list array

def find_adjacent(lst, target):
	# assuming sequence of adjacent keywords has length > 1

	# create set for check process
	s = {key for key in target}
	# print s

	# check process: find two elements in sequence
	indices = [] # output
	i = 0
	while i < len(lst):
		if lst[i] in s:
			j = i # j "records" position
			while j < len(lst) and lst[j] in s:
				j += 1
			if j - i > 1:
				indices.append(i + 1) # +1 because we are looking for the first index
			i = j
		else:
			i += 1
	print indices


# TEST CASES
lst_one = ["hello", "hi", "welcome", "greetings", "hi", "greetings", "hey", "hello"]
target_one = ["hi", "hey", "greetings"]
find_adjacent(lst_one, target_one) # prints [4]

lst_two = ["I", "saw", "susie", "sitting", "in", "a", "shoe", "shine", "shop",
    "where", "she", "sits", "she", "shines", "and", "where", "she", "shines", "she", "sits"]
target_two = ["she", "sits", "shines"]
find_adjacent(lst_two, target_two) # prints [11, 17]
