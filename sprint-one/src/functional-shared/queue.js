var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {
    backlocation: 0,
    storage: {}
  };

  _.extend(obj, queueMethods);

  return obj;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.backlocation] = value;
    this.backlocation--;
  }, 

  dequeue: function(){
     if(this.size()!==0){

         var dequeued = this.storage[this.size()+this.backlocation];
          delete this.storage[this.size()+this.backlocation];
          return dequeued;
         }
  },

  size:function(){
        return (_.size(this.storage));
  }


};