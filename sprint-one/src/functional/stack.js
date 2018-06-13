var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
  };

  someInstance.pop = function() {
  };

  someInstance.size = function() {
    // If the storage is empty, return 0:
    if(Object.keys(storage).length === 0){
      return 0;
    } else {
    // Otherwise, return the length of the storage object by counting the 
    // number of keys it contains:
      return Object.keys(storage).length;
    } 
  };

  return someInstance;
};
