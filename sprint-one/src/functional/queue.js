var Queue = function() {
  var size = 0;
  var firstInLine = 0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    size++;
    storage[size] = value; 

  };

  someInstance.dequeue = function() {
    if(someInstance.size() > 0) {
      firstInLine++;
      var value = storage[firstInLine];
      delete storage[firstInLine];
      return value;
    }
  };

  someInstance.size = function() {
    return size - firstInLine;
  };

  return someInstance;
};