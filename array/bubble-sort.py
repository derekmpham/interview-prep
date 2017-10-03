# Bubble sort python implementation

def bubble_sort(arr):
	length = len(arr)

	for i in range(length):

		for j in range(0, length-i-1):
			if arr[j] > arr[j+1]:
				temp = arr[j]
				arr[j] = arr[j+1]
				arr[j] = temp

	return arr
