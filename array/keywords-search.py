# find position of keywords array (order of words in array doesn't matter) in search list array

def find_adjacent(lst, target):
	# assuming sequence of adjacent keywords has length > 1

	# create set for check process
	s = {key for key in target}
	print s
