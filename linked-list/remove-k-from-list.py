# Given a singly linked list of integers l and an integer k, remove all elements from list l that have a value equal to k

class Node(object):
	def __init__(self, value):
		self.value = value
		self.next = None

def remove_k_from_list(l, k):
	fake_head = Node(None)
	fake_head.next = l
	current_node = fake_head

	while current_node:
		while current_node.next and current_node.next.value == k:
			current_node.next = current_node.next.next
		current_node = current_node.next
	return fake_head.next
