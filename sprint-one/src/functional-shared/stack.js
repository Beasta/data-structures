var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.size = stackMethods.size;
  obj.push = stackMethods.push;
  obj.pop = stackMethods.pop;

  _.extend(obj,stackMethods);
  return obj;
};


var stackMethods = {};
stackMethods.size = function(){
  var thing = this;
  return _.size(thing)-3;
};
stackMethods.push = function(value){
    for (var i = 0; i < arguments.length; i++) {
       this[stackMethods.size(this)+1] = arguments[i];
    };
  };
stackMethods.pop = function(){
    var popped = this[stackMethods.size()];
    delete this[stackMethods.size()]
    return popped;
  };