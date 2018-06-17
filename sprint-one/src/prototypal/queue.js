var Queue = function() {
  var newQueue = Object.create(queueMethods);
  
  newQueue.keys =  Object.keys(newQueue);
  newQueue.elementCount = Object.keys(newQueue).length - 1;
  newQueue.nextAvailable = newQueue.elementCount + 1;

  return newQueue;
};

var queueMethods = {

'enqueue': function(value){
    if(this.elementCount === 0){
      this[0] = value;
      this.nextAvailable = 1;
      this.elementCount = 1;
      return this.elementCount;
    } else {
      this[this.nextAvailable] = value;
      this.nextAvailable++;
      this.elementCount++;
      return this.elementCount;
    }
  },

  'dequeue': function(){
    if(this.elementCount === 0){
      return 0;
    }
    var elementsForKeyShift = Object.keys(this).slice(0, this.elementCount);
    var itemRemoved = this[elementsForKeyShift[0]];
    this.elementCount--;
    delete this[elementsForKeyShift[0]];
    elementsForKeyShift.forEach(function(key){
      parseInt(key);
      key = key - 1;
    });
    return itemRemoved;
  },

  'size': function(){
    if(this.elementCount === 0){
      return 0;
    } else {
      return this.elementCount;
    }
  }

};


