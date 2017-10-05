# Write hashtable class that stores strings in a hash table where keys are calculated using the first two letters of the string

class HashTable(object):
	def __init__(self):
		self.table = [None]*10000
