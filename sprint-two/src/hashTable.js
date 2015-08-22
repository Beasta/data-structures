var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var thisRetrieval = this.retrieve(k);
  if(!thisRetrieval){
    this._storage.set(i,[]);
  }














  thisRetrieval.push(this._storage.set(i,v));
  this._storage.set(i,thisRetrieval);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  /*return*/ var bucket = this._storage.get(i);
  for (var i = 0; i < buck







HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i,null);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
