# Given a singly linked list of integers l and an integer k, remove all elements from list l that have a value equal to k

class Node(object): # define constructor
	def __init__(self, value):
		self.value = value
		self.next = None

def remove_k_from_list(l, k):
	fake_head = Node(None)
	fake_head.next = l
	current_node = fake_head

	while current_node:
		while current_node.next and current_node.next.value == k:
			current_node.next = current_node.next.next
		current_node = current_node.next
	return fake_head.next

def create_nodes(l):
	root = Node(-1)
	current_node = root
	for value in l:
		current_node.next = Node(value)
		current_node = current_node.next
	return root.next


# test cases
list_one = [3, 1, 2, 3, 4, 5]
list_one_nodes = create_nodes(list_one)
k_one = 3
filtered_list_one = remove_k_from_list(list_one_nodes, k_one)
print filtered_list_one.value # prints 1

list_two = [1, 2, 3, 4, 5, 6, 7]
list_two_nodes = create_nodes(list_two)
k_two = 10
filtered_list_two = remove_k_from_list(list_two_nodes, k_two)
print filtered_list_two.value # prints 4
print filtered_list_two.next.next.next.next.next.next.value # prints 7

list_three = [1000, 1000]
list_three_nodes = create_nodes(list_three)
k_three = 1000
filtered_list_three = remove_k_from_list(list_three_nodes, k_three)
print filtered_list_three # prints None
