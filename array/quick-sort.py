# Sort list using recursion

def quick_sort(lst):
	if len(lst) <= 1:
		return lst

	left = []
	right = []

	# compare first element in list to the rest
	for i in lst[1:]:
		if lst[i] < lst[0]:
			left.append(i)
		else:
			right.append(i)

	# recursion
	return quick_sort(left) + lst[0:1] + quick_sort(right)


# test case
print quick_sort([5, 4, 3, 2, 1]) # [1, 2, 3, 4, 5]
