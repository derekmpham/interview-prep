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
