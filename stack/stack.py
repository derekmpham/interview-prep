# Implement stack via linked list

# linked list
class Node(object): # define constructor
	def __init__(self, data):
		self.data = data
		self.next = None

class LinkedList(object):
	def __init__(self, head=None):
		self.head = head

	def insert_first(self, new_node):
		new_node.next = self.head
		self.head = new_node