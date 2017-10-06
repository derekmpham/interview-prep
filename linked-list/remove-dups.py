# remove duplicates of linked list

class Node(object): # define constructor
	def __init__(self, data):
		self.data = data
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

	def search(self, position):
		counter = 1
		current_node = self.head
		if position < 1:
			return None
		while current_node and counter <= position: # go through linked list until you reach input position
			if counter == position:
				return current_node
			current_node = current_node.next
			counter += 1
		return None # if position is larger than length of linked list

	def remove(self, data):
		current_node = self.head
		previous = None
		while current_node.data != data and current_node.next: # move through linked list until you hit node you want to delete
			previous = current_node
			current_node = current_node.next
		if current_node.data == data:
			if previous:
				previous.next = current_node.next
			else:
				self.head = current_node.next


