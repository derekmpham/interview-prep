# You have an array of strings crypt, the cryptarithm, and an an array containing the mapping of letters and digits, solution. The array crypt will contain three non-empty strings that follow the structure: [word1, word2, word3], which should be interpreted as the word1 + word2 = word3 cryptarithm
# Write a solution where if crypt, when it is decoded by replacing all of the letters in the cryptarithm with digits using the mapping in solution, becomes a valid arithmetic equation containing no numbers with leading zeroes, the answer is true. If it does not become a valid arithmetic solution, the answer is false

def isCryptSolution(crypt, solution):
	# map letters to given numbers
	dic = {}
	for key in solution:
		dic[key[0]] = int(key[1])

	# generate input strings into numbers
	arr = []
	for string in crypt:
		arr.append(0)
		for letter in string:
			arr[-1] = arr[-1]*10 + dic[letter]

	# check if sum of decoded numbers of first and second strings equal to decoded number of third string
	if arr[0] + arr[1] == arr[2]:
		if len(`arr[0]`) == len(crypt[0]): # check if decoded number of first string has any leading zero
			if len(`arr[1]`) == len(crypt[1]): # check if decoded number of second string has any leading zero
				if len(`arr[2]`) == len(crypt[2]): # check if decoded number of third string has any leading zero
					return True
	return False


# test cases
crypt_one = ["SEND", 
 			 "MORE", 
			 "MONEY"]
solution_one = [["O","0"], 
				["M","1"], 
				["Y","2"], 
				["E","5"], 
				["N","6"], 
				["D","7"], 
				["R","8"], 
				["S","9"]]
print isCryptSolution(crypt_one, solution_one) # prints True

crypt_two = ["TEN", 
			 "TWO", 
			 "ONE"]
solution_two = [["O","1"], 
				["T","0"], 
				["W","9"], 
				["E","5"], 
				["N","4"]]
print isCryptSolution(crypt_two, solution_two) # prints False

crypt_three = ["ONE", 
			   "ONE", 
			   "TWO"]
solution_three = [["O","2"], 
				  ["T","4"], 
				  ["W","6"], 
				  ["E","1"], 
				  ["N","3"]]
print isCryptSolution(crypt_three, solution_three) # prints True
