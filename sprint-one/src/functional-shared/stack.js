var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};
  _(someInstance).extend(stackMethods);

  someInstance._storage = {};
  someInstance._size = 0;

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


stackMethods.push = function(value) {
  this._storage[this._size++] = value;
};

stackMethods.pop = function() {
  this._size && this._size--;
  var result = this._storage[this._size];

  delete this._storage[this._size];

  return result;
};

stackMethods.size = function() {
  return this._size;
};
