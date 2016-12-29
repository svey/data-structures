

// Instantiate a new graph
var Graph = function(node) {
	this.edges = {};
	this.value = node;
};

//O(1)
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	var newNode = new Graph(node);
	this.value = node;
	this.edges[node] = newNode;
};

// O(1)
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	if (this.edges[node]) {
		return true;
	}
	return false;
};

// O(n) linear-- it has to remove all edges pointing to the node being removed.
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	if (this.edges[node]) {
		for (var key in this.edges[node].edges) {
			this.removeEdge(node, key);
		}
		var value = this.edges[node];
		delete this.edges[node];
		return value;
	}
};

// O(1)
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	//console.log(this.edges[fromNode].edges[toNode].value); Ask Beth why .value is defined in console and won't pass test.
	if (this.edges[fromNode].edges[toNode]) {
		return true;
	}
	return false;
};

// O(1)
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	this.edges[fromNode].edges[toNode] = this.edges[toNode];
	this.edges[toNode].edges[fromNode] = this.edges[fromNode];

};

// O(1)
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	delete this.edges[fromNode].edges[toNode];
	delete this.edges[toNode].edges[fromNode];
};

// O(n)
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	for (var key in this.edges) {
		cb(key);
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


