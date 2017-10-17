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
			current_node.next = new_node
		else:
			self.head = new_node

	def __repr__(self):
		current_node = self.head
		output_arr = []
		while current_node:
			output_arr.append(str(current_node.data))
			current_node = current_node.next
		return "->".join(output_arr)
