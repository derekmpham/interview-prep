# Implement an algorithm that will check whether a given grid of numbers represents a valid Sudoku puzzle

def check_rows(grid):
	for i in range(9):
		ref_check = {}
		for j in range(9):
			if grid[i][j] != '.' and grid[i][j] in ref_check:
				return False
			else:
				ref_check[grid[i][j]] = 1
	return True

def check_columns(grid):
	for i in range(9):
		ref_check = {}
		for j in range(9):
			if grid[j][i] != '.' and grid[j][i] in ref_check:
				return False
			else:
				ref_check[grid[j][i]] = 1
	return True

def check_array(array):
	ref_check = {}
	for square in array:
		if square != '.' and square in ref_check:
			return False
		else:
			ref_check[square] = 1
	return True

def check_sub_grid(grid):
	for row in range(0, 9, 3):
		for i in range(0, 9, 3):
			a = []
			for j in range(row, row + 3):
				for column in range(i, i + 3):
					a.append(grid[j][column])
				if not check_array(a):
					return False
	return True

def sudoku_check(grid):
	return check_rows(grid) and check_columns(grid) and check_sub_grid(grid)


# test cases
test_one = [[".",".",".","1","4",".",".","2","."], 
 			[".",".","6",".",".",".",".",".","."], 
 			[".",".",".",".",".",".",".",".","."], 
 			[".",".","1",".",".",".",".",".","."], 
 			[".","6","7",".",".",".",".",".","9"], 
 			[".",".",".",".",".",".","8","1","."], 
 			[".","3",".",".",".",".",".",".","6"], 
 			[".",".",".",".",".","7",".",".","."], 
 			[".",".",".","5",".",".",".","7","."]]
print sudoku_check(test_one)

test_two = [[".",".",".",".","2",".",".","9","."], 
 			[".",".",".",".","6",".",".",".","."], 
 			["7","1",".",".","7","5",".",".","."], 
 			[".","7",".",".",".",".",".",".","."], 
 			[".",".",".",".","8","3",".",".","."], 
 			[".",".","8",".",".","7",".","6","."], 
 			[".",".",".",".",".","2",".",".","."], 
 			[".","1",".","2",".",".",".",".","."], 
 			[".","2",".",".","3",".",".",".","."]]
print sudoku_check(test_two)

test_three = [[".",".","4",".",".",".","6","3","."], 
 			  [".",".",".",".",".",".",".",".","."], 
 			  ["5",".",".",".",".",".",".","9","."], 
 			  [".",".",".","5","6",".",".",".","."], 
 			  ["4",".","3",".",".",".",".",".","1"], 
 			  [".",".",".","7",".",".",".",".","."], 
 			  [".",".",".","5",".",".",".",".","."], 
 			  [".",".",".",".",".",".",".",".","."], 
 			  [".",".",".",".",".",".",".",".","."]]
print sudoku_check(test_three)
