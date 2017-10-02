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
