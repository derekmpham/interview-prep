# You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees clockwise
# solve with O(1) additional memory

def rotate_image(a):
	n = len(a)

	if a is None or n < 1:
		return a
	else:
		for i in range(n/2):
			for j in range(n-i-1):
				temp = a[i][j]
				a[i][j] = a[n-1-j][i]
				a[n-1-j][i] = a[n-1-i][n-1-j]
				a[n-1-i][n-1-j] = a[j][n-1-i]
				a[j][n-1-i] = temp
		return a
