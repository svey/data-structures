var LinkedList = function() {
  var list = {};
  list.size = 0;
  list.head = null;
  list.tail = null;

  // O(1)
  list.addToTail = function(value) {
    this.size++;
    var node = Node(value);
    if (this.tail) {
      this.tail.next = node;
    }
    if (this.size === 1) {
      this.head = node;
    }
    this.tail = node;
  };

  // O(1)
  list.removeHead = function() {
    var previousHead = this.head;
    if (this.head.next === null) {
     this.head.next = null;
    }
    else {
      this.head = this.head.next;
    }
    return previousHead.value;
  };

  // O(n)
  list.contains = function(target) {
    if (this.tail.value === target || this.head.value === target) {
      return true;
    }
    var searchLinkList = function(start) {
      if (!start) {
        return false;
      }
      if (start.value === target) {
        return true;
      }
      return searchLinkList(start.next);
    };
    return searchLinkList(this.head.next);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions? (see above function declarations)
 */
 