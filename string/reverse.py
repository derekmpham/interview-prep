# Reverse each word in a sentence

def reverse_sentence(string, separator):
	# string_list = string.split()
	# flipped_list = string_list[::-1]
	flipped_list = (string.split())[::-1] # split string into list and then reverse order of elements in list
	output = separator.join(flipped_list)

	print output
