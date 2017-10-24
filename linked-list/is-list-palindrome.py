# Given a singly linked list of integers, determine whether or not it's a palindrome
class Node(object): # define constructor
	def __init__(self, value):
		self.value = value
		self.next = None

def is_list_palindrome(l):
	if not l.value or not l.next.value:
		return True

	# find center of list
	fast = l
	slow = l

	while fast.next and fast.next.next:
		fast = fast.next.next
		slow = slow.next




def create_nodes(l):
	root = Node(-1)
	current_node = root
	for value in l:
		current_node.next = Node(value)
		current_node = current_node.next
	return root.next


is_list_palindrome(create_nodes([1, 2, 3, 4]))
