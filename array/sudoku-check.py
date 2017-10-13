# Implement an algorithm that will check whether a given grid of numbers represents a valid Sudoku puzzle

def check_rows(grid):
	i = 0
	while i < len(grid):
		j = 0
		ref_check = {}
		while j < len(grid[i]):
			if grid[i][j] != '.' and grid[i][j] in ref_check:
				return False
			else:
				ref_check[grid[i][j]] = 1
				j += 1
			i += 1
		return True

def check_columns(grid):
	column = 0
	length = len(grid)
	while column < length:
		row = 0
		ref_check = {}
		while row < length:
			if grid[row][column] != '.' and grid[row][column] in ref_check:
				return False
			else:
				ref_check[grid[row][column]] = 1
			row += 1
		column += 1
	return True

def create_sub_grid(grid):
	ref_check = {}
	for square in grid:
		if square != '.' and square in ref_check:
			return False
		else:
			ref_check[square] = 1
	return True

def check_sub_grid(grid):
	sub_grid = []
	for row in range(0, 9, 3):
		for i in range(0, 9, 3):
			a = []
			for j in range(row, row + 3):
				for column in range(i, i + 3):
					a.append(grid[j][column])
					sub_grid.append(a)

	for row in sub_grid:
		if not create_sub_grid(row):
			return False
	return True
