# iterative approach to binary search function (assume list has distinct elements and elements are in ascending order)

def binary_search(arr, data):
	low = 0 # first element position in array
	high = len(arr) - 1 # last element position in array
	while low <= high: # iterate through "entire" array
		middle = (low + high)/2 
		if arr[middle] == data:
			return middle
		elif arr[middle] < data:
			low = middle + 1 # narrow down search to upper half
		else:
			high = middle - 1 # narrow down search to bottom half
	return -1 # data not in array


# test cases
test = [1, 4, 5, 7, 8, 9, 11, 17, 19, 26, 32, 35, 36]
data_one = 11
data_two = 4
data_three = 35
data_four = 27
data_five = 38

print binary_search(test, data_one) # prints 6
print binary_search(test, data_two) # prints 1
print binary_search(test, data_three) # prints 11
print binary_search(test, data_four) # prints -1
print binary_search(test, data_five) # prints -1
