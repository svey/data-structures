

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = [];
  if (this._storage.get(index) === undefined) {
  	bucket.push([k, v]);
  	return this._storage.set(index, bucket);
  }
  if (this.retrieve(k)) {
	  if (this._storage.get(index)[0][0] === k) {
	  	return this._storage.get(index)[0][1] = v;
	  }

	  if (this._storage.get(index)[1]) {
	  	if (this._storage.get(index)[1][0] === k) {
	  		return this._storage.get(index)[0][1] = v;
	  	}
	  }
  }
  return this._storage.get(index)[1] = [k, v];
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index)[0]) {
  	if (this._storage.get(index)[0][0] === k) {
  		return this._storage.get(index)[0][1];
 	  }
  }
  if (this._storage.get(index)[1]) {
  	if (this._storage.get(index)[1][0] === k) {
  		return this._storage.get(index)[1][1];
 	  }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index)[0]) {
  	if (this._storage.get(index)[0][0] === k) {
  		return this._storage.get(index)[0][1] = undefined;
 	  }
  }
  if (this._storage.get(index)[1]) {
  	if (this._storage.get(index)[1][0] === k) {
  		return this._storage.get(index)[1][1] = undefined;
 	  }
  }  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// var HashTable = function() {
//   this._limit = 8;
//   this._storage = LimitedArray(this._limit);
// };

// HashTable.prototype.insert = function(k, v) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   var bucket = [];
//   if (this._storage.get(index) === undefined) {
//   	bucket.push([k, v]);
//   	return this._storage.set(index, bucket);
//   }
//   if (this._storage.get(index)[0][0] === k) {
//   	return this._storage.get(index)[0][1] = v;
//   }

//   if (this._storage.get(index)[1]) {
//   	if (this._storage.get(index)[1][0] === k) {
//   		return this._storage.get(index)[0][1] = v;
//   	}
//   }
 
//   return this._storage.get(index)[1] = [k, v];
// };

// HashTable.prototype.retrieve = function(k) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   if (this._storage.get(index)[0][0] === k) {
//   	return this._storage.get(index)[0][1];
//   }
//   return this._storage.get(index)[1][1];
// };

// HashTable.prototype.remove = function(k) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   if (this._storage.get(index)[0][0] === k) {
//   	return this._storage.get(index)[0][1] = undefined;
//   }
//   return this._storage.get(index)[1][1] = undefined;
// };
