class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.elementCount = Object.keys(this).length; 
    this.nextAvailable = this.elementCount + 1;
  }

  pop(){
    if(this.elementCount === 0){
      return 0;
    } else {
      var removed = this[this.elementCount - 1];
      this.elementCount--;
      delete this[this.elementCount];
      return removed;
    }
  };

  push(value){
    if(this.elementCount === 0){
      this[0] = value;
      this.elementCount++; 
      return this.elementCount;
    } else {
      this[this.nextAvailable] = value;
      this.elementCount++;
      this.nextAvailable++;
      return this.elementCount;
    }
  } 

  size(){
    if(this.elementCount === 0){
      return 0;
    } else {
      return this.elementCount;
    }
  }
  
}