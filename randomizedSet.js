
// 380. Insert Delete GetRandom O(1)
// Implement the RandomizedSet class:

// bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
// bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
// int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
// Follow up: Could you implement the functions of the class with each function works in average O(1) time?

/**
* Removes a value from the set. Returns true if the set contained the specified element.
* @param {number} val
* @return {boolean}
*/

var RandomizedSet = function () {
  this.set = {}
  this.order = []

};

/**
* Inserts a value to the set. Returns true if the set did not already contain the specified element.
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.insert = function (val) {
  if (this.set[val] || this.set[val] === 0) return false
  this.order.push(val)
  this.set[val] = this.order.length - 1
  return true
};
RandomizedSet.prototype.remove = function (val) {
  if (!this.set[val] && this.set[val] != 0) return false
  let temp = this.order[this.order.length - 1]
  let toReplace = this.set[val]
  this.order[toReplace] = temp
  this.set[temp] = toReplace
  this.order.pop()
  delete this.set[val]
  //[1,2,3]
  //{1:0,
  // 2:1,
  // 3:2}
  return true
};

/**
* Get a random element from the set.
* @return {number}
*/
RandomizedSet.prototype.getRandom = function () {
  let random = Math.floor(Math.random() * this.order.length)
  return this.order[random]
};
