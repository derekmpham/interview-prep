# Implement fibonacci sequence function using recursion

def get_fib(position):
	if position < 2: # base case
		return position
	else:
		return get_fib(position-1) + get_fib(position-2) # add two previous numbers
