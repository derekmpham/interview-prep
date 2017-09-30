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





