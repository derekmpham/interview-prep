# Compress string using counts of repeated characters

def compress_str(str):
	output = ""
	curr_char = ""
	char_count = ""

	for i in str:

		if curr_char != str[i]:
			output = output + curr_char + char_count # add new unique character and its count to our output
			curr_char = str[i] # move on to the next character in string
			char_count = 1 # reset count to 1
		else: # add to repeated count if there is a match
			char_count += 1
