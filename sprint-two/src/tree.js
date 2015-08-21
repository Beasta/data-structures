var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};


  // your code here
  //newTree.children = null;  // fix me


var treeMethods = {};

treeMethods.addChild = function(value){
  

  if(this.top === null){
    newTree[value] = value;
    this.top 
  }

};

treeMethods.contains = function(target){

};




/*
 * Complexity: What is the time complexity of the above functions?
 */
