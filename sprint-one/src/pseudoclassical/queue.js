var Queue = function() {
	this.storage = {};
	this.queueSize = 0;
	this.firstInLine = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.enqueue = function(value) {
	this.queueSize++;
	this.storage[this.queueSize] = value;
};

Queue.prototype.dequeue = function() {
	if (this.size() > 0) {
		this.firstInLine++;
		var value = this.storage[this.firstInLine];
		delete this.storage[this.firstInLine];
		return value;
	}
};

Queue.prototype.size = function() {
	return this.queueSize - this.firstInLine;
};