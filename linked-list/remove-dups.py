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

	def remove_dups(self):
		current_node = self.head
		next_node = current_node.next
		dups = {}

		dups[current_node.data] = True
		# print dups[current_node.data]

		while next_node:
			if dups.has_key(next_node.data):
				current_node.next = next_node.next
			else:
				dups[next_node.data] = True
				current_node = next_node
			next_node = next_node.next


# test cases
node_one = Node(1)
node_two = Node(2)
node_three = Node(3)
node_four = Node(4)
test_one = LinkedList(node_one)
test_one.add(node_two)
test_one.add(node_three)
test_one.add(node_four)
test_one.remove_dups()
print test_one.search(1).data
print test_one.search(2).data
print test_one.search(3).data
print test_one.search(4).data









