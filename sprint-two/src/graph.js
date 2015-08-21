

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.newGraph = {};
  
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this.newGraph[node]=[];
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  return (node in this.newGraph);
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  delete this.newGraph[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  for (var i = 0; i < this.newGraph[fromNode].length; i++) {
    if(this.newGraph[fromNode][i]===toNode){
      return true;
    }
  };
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  this.newGraph[fromNode].push(toNode);
  this.newGraph[toNode].push(fromNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  for (var i = 0; i < this.newGraph[fromNode].length; i++) {
    if(this.newGraph[fromNode][i]===toNode){
      this.newGraph[fromNode][i] = null;
    }
  };
  for (var i = 0; i < this.newGraph[toNode].length; i++) {
    if(this.newGraph[toNode][i]===fromNode){
      this.newGraph[toNode][i] = null;
    }
  };
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  for(var key in this.newGraph){
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



