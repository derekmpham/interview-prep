# Bubble sort python implementation

def bubble_sort(arr):
	length = len(arr)

	for i in range(length): # go through all elements in array

		for j in range(0, length-i-1): # last i elements are already in place
			if arr[j] > arr[j+1]:
				arr[j], arr[j+1] = arr[j+1], arr[j] # swap if element being looked at is greater than element adjacent to the right

	return arr


# test cases
arr_one = [5, 4, 3, 2, 1]
arr_two = [5, 4, 3, 1, 2]
arr_three = [5, 4, 1, 3, 2]
arr_four = [5, 4, 1, 2, 3]
arr_five = [1, 2, 3, 4, 5]

print bubble_sort(arr_one) # prints [1, 2, 3, 4, 5]
print bubble_sort(arr_two) # prints [1, 2, 3, 4, 5]
print bubble_sort(arr_three) # prints [1, 2, 3, 4, 5]
print bubble_sort(arr_four) # prints [1, 2, 3, 4, 5]
print bubble_sort(arr_five) # prints [1, 2, 3, 4, 5]
