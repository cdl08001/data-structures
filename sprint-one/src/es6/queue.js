class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.keys =  Object.keys(this);
    this.elementCount = Object.keys(this).length - 1;
    this.nextAvailable = this.elementCount + 1;
  }

  enqueue(value){
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

  dequeue(){
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

  size(){
    if(this.elementCount === 0){
      return 0;
    } else {
      return this.elementCount;
    }
  }
  
}
