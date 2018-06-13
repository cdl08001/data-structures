var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    // Check to see if anything exists within storage.
    // If so, apply a key of number 0 and a value = value:
    if(Object.keys(storage).length === 0){
      storage[0] = value;
    } else {
      // Otherwise, the object is not empty, so gather all current keys:
      var currentKeys = Object.keys(storage);

      // If storage is not empty, find the value of the last key:
      var lastKey = currentKeys[currentKeys.length - 1];

      // Identify the next available number to be used as a key:
      var nextAvailable = parseInt(lastKey) + 1;

      // Create a new key\value pair within storage that is 
      // the combination of 'nextAvailable' and the passed in value: 
      storage[nextAvailable] = value;

      // Return the number of keys within the updated object:
      return Object.keys(storage).length;
    }

  };

  someInstance.pop = function() {
    // If the object is empty and you try to remove an element, return 0:
    if(Object.keys(storage).length === 0){
      return 0;
    } else {
      // Otherwise, the object is not empty, so gather all current keys:
      var currentKeys = Object.keys(storage);

      // Store the last key in the object in order to return it later:
      var itemRemoved = storage[currentKeys[currentKeys.length - 1]];

      // Delete the last element within the storage object:
      delete storage[currentKeys[currentKeys.length - 1]];

      // Return the new length of the storage object via the number of keys it contains:
      return itemRemoved;
    }
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
