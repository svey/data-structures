var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.queueSize = 0;
  someInstance.firstInLine = 0;
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
	//debugger;
	this.queueSize++;
	this.storage[this.queueSize] = value;
};

queueMethods.dequeue = function() {
	if (this.size() > 0) {
		this.firstInLine++;
		var value = this.storage[this.firstInLine];
		delete this.storage[this.firstInLine];
		return value;
	}
};

queueMethods.size = function() {
	return this.queueSize - this.firstInLine;
};

