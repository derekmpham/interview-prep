# Create queue using a list

class Queue:
	def __init__(self, head=None):
		self.storage = [head]

	def enqueue(self, new_element): # add to back
		self.storage.append(new_element)

	def dequeue(self): # remove from front
		return self.storage.pop(0)

	def peek(self): # take a look at the first in line
		return self.storage[0]


# test case
test_queue = Queue(1)
test_queue.enqueue(2)
test_queue.enqueue(3)

print test_queue.peek() # prints 1
print test_queue.dequeue() # prints 1
test_queue.enqueue(4)
print test_queue.dequeue() # prints 2
print test_queue.dequeue() # prints 3
print test_queue.dequeue() # prints 4
test_queue.enqueue(5)
print test_queue.peek() # prints 5
