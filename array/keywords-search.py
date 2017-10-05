# find position of keywords array (order of words in array doesn't matter) in search list array

def find_adjacent(lst, target):
	# assuming sequence of adjacent keywords has length > 1

	# create set for check process
	s = {key for key in target}
	# print s

	# check process: find two elements in sequence
	indices = []
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
