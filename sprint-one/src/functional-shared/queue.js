var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};
  _(someInstance).extend(queueMethods);

  someInstance._storage = {};
  someInstance._start = 0;
  someInstance._end = 0;

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

queueMethods.enqueue = function(value) {
  this._storage[this._end++] = value;
};

queueMethods.dequeue = function() {
  // This does some unnecessary work sometimes. Can you spot why?
  var result = this._storage[this._start];
  delete this._storage[this._start];

  this.size() && this._start++;

  return result;
};

queueMethods.size = function() {
  return this._end - this._start;
};
