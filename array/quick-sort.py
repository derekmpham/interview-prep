# Sort list using recursion

def quick_sort(lst):
	if len(lst) == 0:
		print []

	left = []
	right = []
	pivot = lst[0]

	# compare first element in list to the rest
	for i in range(1, len(lst)):
		if lst[i] < pivot:
			left.append(lst[i])
		else:
			right.append(lst[i])


