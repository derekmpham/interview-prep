# Given a singly linked list of integers l and an integer k, remove all elements from list l that have a value equal to k

class Node(object): # define constructor
	def __init__(self, value):
		self.value = value
		self.next = None
