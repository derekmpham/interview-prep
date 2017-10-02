# Create queue using a list

class Queue:
	def __init__(self, head=None):
		self.storage = [head]

	def enqueue(self, new_element):
		self.storage.append(new_element)

	def dequeue(self):
		return self.storage.pop(0)
