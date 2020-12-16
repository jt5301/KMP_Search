
/*
Happy Number
Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.*/

var isHappy = function (n) {
  let recorded = {};
  let numArr = n
    .toString()
    .split('')
    .map(current => {
      return parseInt(current, 10);
    });
  while (true) {
    let possibleHappy = numArr.reduce((acc, current) => {
      acc += current * current;
      return acc;
    }, 0);
    if (possibleHappy === 1) return true;
    if (!recorded[possibleHappy]) {
      recorded[possibleHappy] = 1;
      numArr = possibleHappy
        .toString()
        .split('')
        .map(current => {
          return parseInt(current, 10);
        });
    } else return false;
  }
};
