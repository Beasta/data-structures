var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    for (var i = 0; i < arguments.length; i++) {
       storage[someInstance.size(storage)+1] = arguments[i];
    };
    
  };

  someInstance.pop = function(){
    var popped = storage[someInstance.size()];
    delete storage[someInstance.size()]
    return popped;
  };

  someInstance.size = function(){
    return (_.size(storage));
  };

  return someInstance;
};
