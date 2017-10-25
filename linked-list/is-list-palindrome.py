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

	second_head = Node(slow.next.value)
	slow.next = None

	# reverse second part of list
	part_one = second_head
	part_two = part_one.next

	while part_one and part_two:
		temp = Node(part_two.next.value)
		part_two.next = part_one
		part_one = part_two
		part_two = temp

	second_head.next = None


def create_nodes(l):
	root = Node(-1)
	current_node = root
	for value in l:
		current_node.next = Node(value)
		current_node = current_node.next
	return root.next


is_list_palindrome(create_nodes([1, 2, 3, 4]))
