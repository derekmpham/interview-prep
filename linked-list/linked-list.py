# LINKED LIST

# define constructor
class Node(object):
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
		else:
			self.head = new_node

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
		return None # if position larger than length of linked list

	def insert(self, new_node, position):
		counter = 1
		current_node = self.head
		if position > 1:
			while current_node and counter < position:
				if counter == position - 1: # insert new node at position
					new_node.next = current_node.next
					current_node.next = new_node
				current_node = current_node.next
				counter += 1
		elif position == 1:
			new_node = self.head
			self.head = new_node

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


# test cases
node_one = Node(1)
node_two = Node(2)
node_three = Node(3)
node_four = Node(4)

test_list = LinkedList(node_one)
test_list.add(node_two)
test_list.add(node_three)

print test_list.head.next.next.data # prints 3
print test_list.search(3).data # also prints 3

test_list.insert(node_four, 2)
print test_list.search(2).data # prints 4

test_list.remove(1)
print test_list.search(1).data # prints 4
print test_list.search(2).data # prints 2
print test_list.search(3).data # prints 3
