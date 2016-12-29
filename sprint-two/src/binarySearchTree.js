var BinarySearchTree = function(value) {
	var branch = Object.create(binarySearchTree);
	branch.value = value;
	branch.left = null;
	branch.right = null;
	return branch;
};

var binarySearchTree = {};

binarySearchTree.insert = function(value) {
	if (value < this.value) {
		if (!this.left) {
			return this.left = BinarySearchTree(value);
		} else {
			return this.left.insert(value);
		}
	}
	if (value > this.value) {
		if (!this.right) {
			return this.right = BinarySearchTree(value);
		} else {
			return this.right.insert(value);
		}
	}
};

binarySearchTree.contains = function(value) {
	var contains = false;
	if (value === this.value) {
		return true;
	}
	if (value < this.value) {
		if (this.left) {
			return contains = this.left.contains(value);
		}
		return false;
	}
	if (value > this.value) {
		if (this.right) {
			return constains = this.right.contains(value);
		} 
		return false;	
	}
	return contains;
};

binarySearchTree.depthFirstLog = function(callback) {
	callback(this.value);
	if (this.left) {
		this.left.depthFirstLog(callback);
	}
	if (this.right) {
		this.right.depthFirstLog(callback);
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
