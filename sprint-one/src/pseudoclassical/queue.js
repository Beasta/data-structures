var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.backlocation = 0;
};


  Queue.prototype.enqueue = function(value){
    this.storage[this.backlocation] = value;
    this.backlocation--;
  }, 

  Queue.prototype.dequeue = function(){
     if(this.size()!==0){

         var dequeued = this.storage[this.size()+this.backlocation];
          delete this.storage[this.size()+this.backlocation];
          return dequeued;
         }
  },

  Queue.prototype.size = function(){
        return (_.size(this.storage));
  }