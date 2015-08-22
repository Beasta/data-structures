var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){ //key parameter, value parameter
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var duplicate = false;
  

  if(!bucket){ // if if there is nothing in bucket, create an empty array to push to
    bucket = [];
  }else{
    for (var j = 0; j < bucket.length; j++) {
      if(bucket[j][0]===k){
        duplicate=true;
        bucket[j][1]=v;
      };
    };  
  }
  //console.log("k:"+k+", v:"+v);
  //console.dir(bucket)
  if(!duplicate){
    bucket.push([k,v]);
  }

  this._storage.set(i,bucket);
};

HashTable.prototype.retrieve = function(k){  //key parameter, returns value
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for (var j = 0; j < bucket.length; j++) {
    if(bucket[j][0]===k){
      return bucket[j][1];
    };
  };
  
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for (var j = 0; j < bucket.length; j++) {
    if(bucket[j][0]===k){
      bucket[j][1]=null;
    };
  };

  this._storage.set(i,bucket);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
