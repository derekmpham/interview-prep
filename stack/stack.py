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
		deleted_node = self.head
		if self.head:
			self.head = self.head.next
			deleted_node.next = None
			return deleted_node
		else:
			return None

class Stack(object):
	def __init__(self, top=None):
		self.linked_list = LinkedList(top)

	def push(self, new_node):
		self.linked_list.insert_first(new_node)

	def pop(self):
		return self.linked_list.remove_first()


# test case
node_one = Node(1)
node_two = Node(2)
node_three = Node(3)
node_four = Node(4)

test_stack = Stack(node_one)
test_stack.push(node_two)
test_stack.push(node_three)
test_stack.push(node_four)
print test_stack.pop().data # returns 4
print test_stack.pop().data # returns 3
