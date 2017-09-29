# Reverse each word in a sentence

def reverse_sentence(string):
	string_list = string.split() # split string by word into list
	output = ' '.join([word[::-1] for word in string_list]) # reverse each element/word in list and consolidate into single string

	print output

# test cases
test = "Hey dude!"
reverse_sentence(test)
test2 = "dude"
reverse_sentence(test2)
