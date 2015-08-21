var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){ 
  //needs to: add pointer from old tail to new tail
  //needs to : create new node
    var tempNode = new Node(value);
    

    if(list.head === null){
      tempNode.next = list.head;
      list.head = tempNode;
      list.tail = list.head;

    }else{
      list.tail.next = tempNode;
      list.tail = tempNode; 
    }

  };

  list.removeHead = function(){
    //list.head = list.head;
    var temp = list.head;
    list.head = list.head.next;
    return temp.value;
    delete temp;
  };

  list.contains = function(target){
    var check = list.head;


    //console.dir(check.next);
    while (check.next!==null){

      if(check.value === target){
        //console.log('should return true');
        return true;
      }

      check = check.next;
    }

    if(check.value === target){
        //console.log('should return true');
        return true;
    }

    //console.log('should return false');
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
//list.addToTail(new Node('cool'))  