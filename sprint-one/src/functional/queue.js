var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // If the storage is empty, set the first queued element
    // to have a key of number 0, and return the storage. 
    if(Object.keys(storage).length === 0){
      storage[0] = value;
      return storage;
    } else {
      // Otherwise, isolate all of the keys within the object:
      var currentKeys = Object.keys(storage);

      // Find the last key and convert it to an integer (in order to increment it):
      var lastKey = parseInt(currentKeys[currentKeys.length - 1]);

      // Calculate the next available key value: 
      var nextKeyValue = lastKey + 1;

      // Set nextKeyValue and assign it to the passed in 'value';
      storage[nextKeyValue] = value;

      // Return storage:
      return storage;
    }
  };

  someInstance.dequeue = function() {
    // Identify the element in the front of the queue:
    var itemRemoved = storage[Object.keys(storage)[0]];

    // Remove it from the queue:
    delete storage[Object.keys(storage)[0]];

    // For each of the remaining keys, decrement their keys in order to shift
    // index positions:
    var remainingKeys = Object.keys(storage);
    remainingKeys.forEach(function(key){
      parseInt(key);
      key = key - 1;
      
    })
    return itemRemoved;
  };

  someInstance.size = function() {
    // If the storage is empty, return 0;
    if(Object.keys(storage).length === 0){
      return 0;
    } else {
      // Otherwise, return the length of storage via a tally on the number of keys:
      return Object.keys(storage).length;
    }
  };

  return someInstance;
};