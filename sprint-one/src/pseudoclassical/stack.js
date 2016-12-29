var Stack = function() {
	this.storage = {};
	this.stackSize = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Stack.prototype.size = function() {
	return this.stackSize;
};

Stack.prototype.push = function(value) {
	this.stackSize++;
	this.storage[this.stackSize] = value;
};

Stack.prototype.pop = function() {
	if (this.size() > 0) {
		var value = this.storage[this.stackSize];
		delete this.storage[this.stackSize];
		this.stackSize--;
		
		return value;
	}
};

