# Implement fibonacci sequence function using recursion

def get_fib(position):
	if position < 2: # base case
		return position
	else:
		return get_fib(position-1) + get_fib(position-2) # add two previous numbers


# test cases
print get_fib(9) # returns 34
print get_fib(11) # returns 89
print get_fib(0) # returns 0
