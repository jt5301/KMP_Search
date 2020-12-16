// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// Follow up:
// Could you do get and put in O(1) time complexity?

var LRUCache = function (capacity) {
  this.capacity = capacity
  this.cache = new Map()
};

/**
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) this.cache.get(key)
  else return -1
  let val = this.cache.get(key)
  this.cache.delete(key)
  this.cache.set(key, val)
  return this.cache.get(key)
};

/**
* @param {number} key
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key)
  }
  this.cache.set(key, value)
  if (this.cache.size > this.capacity) {
    let test = this.cache.keys().next()
    this.cache.delete(test.value)
  }
};
