var Stack = function() {
  this.elementCount = Object.keys(this).length; 
  this.nextAvailable = this.elementCount + 1;
};


Stack.prototype.pop = function(){
  if(this.elementCount === 0){
    return 0;
  } else {
    var removed = this[this.elementCount - 1];
    this.elementCount--;
    delete this[this.elementCount];
    return removed;
  }
};

Stack.prototype.push = function(value){
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
};

Stack.prototype.size = function(){
  if(this.elementCount === 0){
    return 0;
  } else {
    return this.elementCount;
  }
};