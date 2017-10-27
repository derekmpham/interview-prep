# You have been given a string s, which is supposed to be a sentence. However, someone forgot to put spaces between the different words, and for some reason they capitalized the first letter of every word. Return the sentence after making the following amendments: (1) Put a single space between the words; and (2) Convert the uppercase letters to lowercase

def amend_sentence(s):
	sentence = ""

	for i, char in enumerate(s):
		if char.isupper():
			if i != 0: # add space before upper case letter (that is not first letter of input string) and lowercase that letter
				sentence += " " + char.lower()
			else:
				sentence += char.lower()
		else: # add already lowercased letter to output sentence
			sentence += char
	return sentence


# test cases
print amend_sentence("WhatIsUp") # prints "what is up"
print amend_sentence("Hey") # prints "hey"
print amend_sentence("iEiMCyKAsdfGMPa") # prints "i ei m cy k asdf g m pa"
print amend_sentence("VizQEogigkRZJacVELulHjG") # prints "viz q eogigk r z jac v e lul hj g"
