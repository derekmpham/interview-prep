# Given a singly linked list of integers, determine whether or not it's a palindrome
class Node(object): # define constructor
	def __init__(self, value):
		self.value = value
		self.next = None

def is_list_palindrome(l):
	if not l.value or not l.next.value:
		return True

def create_nodes(l):
	root = Node(-1)
	current_node = root
	for value in l:
		current_node.next = Node(value)
		current_node = current_node.next
	return root.next