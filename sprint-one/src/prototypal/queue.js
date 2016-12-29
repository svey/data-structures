var Queue = function() {
	var someInstance = Object.create(queueMethods);
	someInstance.storage = {};
	someInstance.queueSize = 0;
	someInstance.firstInLine = 0;
	return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
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