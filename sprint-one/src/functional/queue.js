var Queue = function(){
  //
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var backLocation = 0;

  someInstance.enqueue = function(value){
    for (var i = 0; i < arguments.length; i++){
      storage[backLocation] = arguments[i];
      backLocation--;
    };
  };

  someInstance.dequeue = function(){
    var dequeued = storage[someInstance.size()+backLocation];
    delete storage[someInstance.size()+backLocation]
    return dequeued;
  };

  someInstance.size = function(){
    return (_.size(storage));
  };

  return someInstance;
};