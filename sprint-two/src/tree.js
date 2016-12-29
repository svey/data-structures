var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

// O(1)
treeMethods.addChild = function(value) {
	var child = Tree(value);
	this.children.push(child);
};

// O(n) talk to Beth about time complexity and why contains is neccesary	
treeMethods.contains = function(target) {
	var contains = false;
	if (this.value === target) {
		return true;
	}
		for (var i = 0; i < this.children.length; i++) {
			contains = this.children[i].contains(target);
		}
	return contains;
};

/*
 * Complexity: What is the time complexity of the above functions? (see above)
 */
