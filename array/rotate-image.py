# You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees clockwise
# solve with O(1) additional memory

def rotate_image(a):
	n = len(a)

	if a is None or n < 1:
		return a
	else:
		for i in range(n/2): # loop through all squares one by one
			for j in range(i, n-i-1): # loop through inner squares (in groups of 4 in current square)
				temp = a[i][j] # store current square
				a[i][j] = a[n-1-j][i] # move values from left to top
				a[n-1-j][i] = a[n-1-i][n-1-j] # move values from bottom to left
				a[n-1-i][n-1-j] = a[j][n-1-i] # move values from right to bottom
				a[j][n-1-i] = temp # assign temp to right
		return a


# test cases
test_one = [[1,2,3], 
 			[4,5,6], 
 			[7,8,9]]
print rotate_image(test_one)
# prints [[7,4,1], 
 		# [8,5,2], 
 		# [9,6,3]]
test_two = [[1]]
print rotate_image(test_two) # prints [[1]]
test_three = [[10,9,6,3,7], 
			  [6,10,2,9,7],
			  [7,6,3,8,2], 
			  [8,9,7,9,9], 
			  [6,8,6,8,2]]
print rotate_image(test_three)
# prints [[6,8,7,6,10], 
		# [8,9,6,10,9], 
		# [6,7,3,2,6], 
		# [8,9,8,9,3], 
		# [2,9,2,7,7]]
