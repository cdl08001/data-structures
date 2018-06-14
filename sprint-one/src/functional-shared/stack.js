var Stack = function() {

  var newStack = {};
  
  // Identify element count in object:
  newStack.elementCount = Object.keys(newStack).length;

  // Identify the next available key that can be used:
  newStack.nextAvailable = newStack.elementCount + 1;

  
  // Extend the methods within 'stackMethods' object onto all newStack objects.
  _.extend(newStack, stackMethods);

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