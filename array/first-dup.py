# Given an array "a" that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1

def first_duplicate(a): # stores values in input array in hash table as a reference check
	first_occurence = {}

	for i in range(len(a)):
		if a[i] not in first_occurence:
			first_occurence[a[i]] = 1
		else:
			return a[i]
	return -1

def first_dup(a): # runs in O(n) and uses no extra storage
	# we use the original array as a hash table with a negative flag for checking 
	for i in range(len(a)):
		key = abs(a[i])
		if a[key - 1] < 0:
			return key
		else:
			a[key - 1] = -a[key - 1]
	return -1


# test cases
print first_duplicate([2, 3, 3, 1, 5, 2]) # prints 3
print first_duplicate([2, 4, 3, 5, 1]) # prints -1
print first_dup([2, 3, 3, 1, 5, 2]) # prints 3
print first_dup([2, 4, 3, 5, 1]) # prints -1
