# Implement stack via linked list

# linked list
class Node(object): # define constructor
	def __init__(self, data):
		self.data = data
		self.next = None

class LinkedList(object):
	def __init__(self, head=None):
		self.head = head

	def insert_first(self, new_node): # pushing on the first node runs much faster than going through entire list and adding new node to the end/tail (i.e. add method in original linked list method)
		new_node.next = self.head
		self.head = new_node

	def remove_first(self): # popping on first node runs much faster than going through entire list and removing end/tail node
		if self.head:
			deleted_node = self.head
			temp = deleted_node.next
			self.head = temp
			return deleted_node
		else:
			return None

class Stack(object):
	def __init__(self, top=None):
		self.linked_list = LinkedList(top)
