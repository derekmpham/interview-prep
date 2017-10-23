# Given a singly linked list of integers, determine whether or not it's a palindrome
class Node(object): # define constructor
	def __init__(self, value):
		self.value = value
		self.next = None

def is_list_palindrome(l):
	if not l.value or not l.next.value:
		return True

	fake_head = Node(None)
	fake_head.next = l
	fast_node = fake_head
	slow_node = fake_head

	while fast_node.next and fast_node.next.next:
		fast_node = fast_node.next.next
		slow_node = slow_node.next

	second_head = Node(slow_node.next)
	slow_node.next = None

def create_nodes(l):
	root = Node(-1)
	current_node = root
	for value in l:
		current_node.next = Node(value)
		current_node = current_node.next
	return root.next


is_list_palindrome(create_nodes([1, 2, 3, 4]))
