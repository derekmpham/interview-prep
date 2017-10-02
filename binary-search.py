# iterative approach to binary search function (assume list has distinct elements and elements are in ascending order)

def binary_search(arr, data):
	low = 0 # first element in array
	high = len(arr) - 1 # last item in array
	while low <= high: # iterate through "entire" array
		middle = (low + high)/2 
		if arr[middle] == data:
			return middle
		elif arr[middle] < data:
			low = middle + 1 # narrow down search to upper half
		else:
			high = middle - 1 # narrow down search to bottom half
	return -1 # data not in array
