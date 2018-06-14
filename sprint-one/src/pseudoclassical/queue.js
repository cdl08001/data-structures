var Queue = function() {
  this.keys =  Object.keys(this);
  this.elementCount = Object.keys(this).length - 1;
  this.nextAvailable = this.elementCount + 1;
};

Queue.prototype.enqueue = function(value){
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
}

Queue.prototype.dequeue = function(){
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
}

Queue.prototype.size = function(){
  if(this.elementCount === 0){
    return 0;
  } else {
    return this.elementCount;
  }
}