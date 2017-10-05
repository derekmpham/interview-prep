# Write hashtable class that stores strings in a hash table where keys are calculated using the first two letters of the string

class HashTable(object):
	def __init__(self):
		self.table = [None]*10000

	def store(self, string):
		hash_value = self.calculate_hash_value(string)
		if hash_value != -1:
			if self.table[hash_value] != None:
				self.table[hash_value].append(string)
			else:
				self.table[hash_value] = [string]

	def search(self, string):
		hash_value = self.calculate_hash_value(string)
		if hash_value != -1:
			if self.table[hash_value] != None:
				if string in self.table[hash_value]:
					return hash_value
		return -1
