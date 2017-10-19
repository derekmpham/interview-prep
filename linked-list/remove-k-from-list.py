# Given a singly linked list of integers l and an integer k, remove all elements from list l that have a value equal to k

class Node(object): # define constructor
	def __init__(self, value):
		self.value = value
		self.next = None

class LinkedList(object):
	def __init__(self, head=None):
		self.head = head

	def add(self, new_node):
		current_node = self.head
		if self.head:
			while current_node.next:
				current_node = current_node.next
			current_node.next = new_node # add to end of linked list
		else:
			self.head = new_node

def remove_k_from_list(l, k):
	fake_head = Node(None)
	fake_head.next = l
	current_node = fake_head

	while current_node:
		while current_node.next and current_node.next.value == k:
			current_node.next = current_node.next.next
		current_node = current_node.next
	return fake_head.next
