var Stack = function() {
  var someInstance = {};
  var size = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    size++;
    storage[size] = value;
  };

  someInstance.pop = function() {
    if (size > 0) {
      var value = storage[size];
      delete storage[size];
      size--;
      return value;
    }

  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
