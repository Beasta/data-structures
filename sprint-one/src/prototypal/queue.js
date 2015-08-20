var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.storage = {};
  obj.backlocation = 0;
  return obj;
};

var queueMethods = {};

  queueMethods.enqueue = function(value){
    this.storage[this.backlocation] = value;
    this.backlocation--;
  }, 

  queueMethods.dequeue = function(){
     if(this.size()!==0){

         var dequeued = this.storage[this.size()+this.backlocation];
          delete this.storage[this.size()+this.backlocation];
          return dequeued;
         }
  },

  queueMethods.size = function(){
        return (_.size(this.storage));
  }

