var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.stackSize = 0;
  someInstance.storage = {};
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
	this.stackSize++;
	this.storage[this.stackSize] = value;
};

stackMethods.pop = function() {
	if (this.stackSize > 0) {
		var value = this.storage[this.stackSize];
		delete this.storage[this.stackSize];
		this.stackSize--;
		return value;
	}
};

stackMethods.size = function() {
	return this.stackSize;
};


