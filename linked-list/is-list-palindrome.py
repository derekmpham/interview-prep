# Given a singly linked list of integers, determine whether or not it's a palindrome
class Node(object): # define constructor
	def __init__(self, value):
		self.value = value
		self.next = None

def is_list_palindrome(l):
	if l is None or l.next is None:
		return True

	# find center of list
	fast = l
	slow = l
	while fast.next and fast.next.next:
		fast = fast.next.next
		slow = slow.next

	# reverse second half of list
	p = slow.next
	current_node = None
	while p:
		next = p.next
		p.next = current_node
		current_node = p
		p = next

	# check for palindrome
	part_one = current_node
	part_two = l
	while part_one and part_one.value == part_two.value:
		part_one = part_one.next
		part_two = part_two.next

	return part_one is None

def create_nodes(l):
	root = Node(-1)
	current_node = root
	for value in l:
		current_node.next = Node(value)
		current_node = current_node.next
	return root.next


# test cases
print is_list_palindrome(create_nodes([0, 1, 0])) # prints true
print is_list_palindrome(create_nodes([1, 2, 2, 3])) # prints false
print is_list_palindrome(create_nodes([1, 1000000000, -1000000000, -1000000000, 1000000000, 1])) # prints true
print is_list_palindrome(create_nodes([8])) # prints true
