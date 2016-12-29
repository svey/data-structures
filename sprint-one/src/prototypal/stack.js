var Stack = function() {
	var someInstance = Object.create(stackMethods);
	someInstance.storage = {};
	someInstance.stackSize = 0;
	return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {};

stackMethods.push = function(value) {
	this.stackSize++;
	this.storage[this.stackSize] = value;
};

stackMethods.pop = function() {
	if (this.size() > 0) {
		value = this.storage[this.stackSize];
		delete this.storage[this.stackSize];
		this.stackSize--;
		return value;
	}
};

stackMethods.size = function() {
	return this.stackSize;
};




