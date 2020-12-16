// You have a browser of one tab where you start on the homepage and you can visit another url, get back in the history number of steps or move forward in the history number of steps.

// Implement the BrowserHistory class:

// BrowserHistory(string homepage) Initializes the object with the homepage of the browser.
// void visit(string url) Visits url from the current page. It clears up all the forward history.
// string back(int steps) Move steps back in history. If you can only return x steps in the history and steps > x, you will return only x steps. Return the current url after moving back in history at most steps.
// string forward(int steps) Move steps forward in history. If you can only forward x steps in the history and steps > x, you will forward only x steps. Return the current url after forwarding in history at most steps.


/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.urls = [homepage]
  this.pointer = 0
};
BrowserHistory.prototype.visit = function (url) {
  if (this.pointer != this.urls.length - 1) {
    this.urls.splice(this.pointer + 1)
    this.urls.push(url)
    this.pointer = this.urls.length - 1
  }
  else {
    this.urls.push(url)
    this.pointer += 1
  }
};

/**
* @param {number} steps
* @return {string}
*/
BrowserHistory.prototype.back = function (steps) {
  if (this.pointer - steps < 0) {
    this.pointer = 0
    return this.urls[this.pointer]
  }
  this.pointer -= steps
  return this.urls[this.pointer]
};

/**
* @param {number} steps
* @return {string}
*/
BrowserHistory.prototype.forward = function (steps) {
  if (this.pointer + steps > this.urls.length - 1) {
    this.pointer = this.urls.length - 1
    return this.urls[this.urls.length - 1]
  }
  this.pointer += steps
  return this.urls[this.pointer]
};


/**
* @param {number} steps
* @return {string}
*/
BrowserHistory.prototype.forward = function (steps) {
  if (this.pointer + steps > this.urls.length - 1) {
    this.pointer = this.urls.length - 1
    return this.urls[this.urls.length - 1]
  }
  this.pointer += steps
  return this.urls[this.pointer]
};
