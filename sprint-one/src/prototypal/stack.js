var Stack = function() {

  var newStack = Object.create(stackMethods);
  newStack.elementCount = Object.keys(newStack).length;
  newStack.nextAvailable = newStack.elementCount + 1;

  return newStack;
};

var stackMethods = {

  'pop': function() {
    if(this.elementCount === 0){
      return 0;
    } else {
      var removed = this[this.elementCount - 1];
      this.elementCount--;
      delete this[this.elementCount];
      return removed;
    }

  },

  'push': function(value){
    // If the object is empty, assign value to key of 0:
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
  },

  'size': function(){
    if(this.elementCount === 0){
      return 0;
    } else {
      return this.elementCount;
    }
  }
};

