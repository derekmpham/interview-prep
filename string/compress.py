# Compress string using counts of repeated characters

def compress_str(string):
	output = ""
	char_count = 1

	# add first character
	output += string[0]

	for i in range(len(string)-1): # doesn't do character count for last group of a unique character
		if string[i] == string[i+1]:
			char_count += 1
		else:
			output += str(char_count) + string[i+1] # add count and next unique character
			char_count = 1 # reset character count

	# account for count of last character
	output += str(char_count)

	print output


# test cases
compress_str("ssssssss") # prints "s8"
compress_str("abbcccdddd") # prints "a1b2c3d4"
