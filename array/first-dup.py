# Given an array "a" that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1

def first_duplicate(a):
	first_occurence = {}

	for i in range(len(a)):
		if a[i] not in first_occurence:
			first_occurence[a[i]] = 1
		else:
			return a[i]
	return -1


# test cases
print first_duplicate([2, 3, 3, 1, 5, 2]) # prints 3
print first_duplicate([2, 4, 3, 5, 1]) # prints -1
print first_duplicate([1]) # prints -1
print first_duplicate([2, 2]) # prints 2
print first_duplicate([2, 1]) # prints -1
print first_duplicate([2, 1, 3]) # prints -1
print first_duplicate([2, 3, 3]) # prints 3
print first_duplicate([3, 3, 3]) # prints 3
print first_duplicate([8, 4, 6, 2, 6, 4, 7, 9, 5, 8]) # prints 6
print first_duplicate([10, 6, 8, 4, 9, 1, 7, 2, 5, 3]) # prints -1
print first_duplicate([1, 1, 2, 2, 1]) # prints 1
