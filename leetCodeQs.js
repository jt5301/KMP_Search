//Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
var threeSum = function (nums) {
  let sumArrays = [];
  let sortedArray = bubbleSort(nums);
  for (let i = 0; i < sortedArray.length - 2; i++) {
    let firstNum = sortedArray[i];
    let secondInd = i + 1;
    let thirdInd = sortedArray.length - 1;
    while (thirdInd > secondInd) {
      if (firstNum + sortedArray[secondInd] + sortedArray[thirdInd] === 0) {
        let correctArray = [
          firstNum,
          sortedArray[secondInd],
          sortedArray[thirdInd],
        ];
        sumArrays.push(correctArray);
        secondInd += 1;
        thirdInd -= 1;
      }
      if (firstNum + sortedArray[secondInd] + sortedArray[thirdInd] < 0) {
        secondInd += 1;
      }
      if (firstNum + sortedArray[secondInd] + sortedArray[thirdInd] > 0) {
        thirdInd -= 1;
      }
    }
  }
  return sumArrays;
};
function bubbleSort(nums) {
  for (let i = nums.length - 1; i > 0; i--) {
    let swapped = true;
    for (let k = 0; k < i; k++) {
      if (nums[k] > nums[k + 1]) {
        let temp = nums[k];
        nums[k] = nums[k + 1];
        nums[k + 1] = temp;
        swapped = false;
      }
    }
  }
  return nums;
}

//container w most water

//brute force
var maxArea = function (height) {
  let currentHighest = 0;

  for (let i = 0; i < height.length; i++) {
    for (let k = i + 1; k < height.length; k++) {
      let lowest = Math.min(height[i], height[k]);
      let tempHighest = lowest * (k - i);
      currentHighest = Math.max(currentHighest, tempHighest);
    }
  }
  return currentHighest;
};
//w pointers

var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let mostWater = 0;

  while (left < right) {
    let smallest = Math.min(height[left], height[right]);
    let tempHeight = smallest * (right - left);
    mostWater = Math.max(mostWater, tempHeight);
    if (smallest === height[left]) left += 1;
    else {
      if (smallest === height[right]) right -= 1;
      else {
        if (height[right] === height[left]) left += 1;
      }
    }
  }
  return mostWater;
};

/* Write an algorithm to determine if a number is "happy".

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

/* Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

Example:

Input: 38
Output: 2
Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2.
             Since 2 has only one digit, return it.*/

var addDigits = function (num) {
  let numArray = num
    .toString()
    .split('')
    .map(current => {
      return parseInt(current, 10);
    });
  while (numArray.length != 1) {
    let total = numArray.reduce((accum, current) => {
      return (accum += current);
    }, 0);
    numArray = total
      .toString()
      .split('')
      .map(current => {
        return parseInt(current, 10);
      });
  }
  return numArray[0];
};

/* Ugle number
Write a program to check whether a given number is an ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

Example 1:

Input: 6
Output: true
Explanation: 6 = 2 × 3
Example 2:

Input: 8
Output: true
Explanation: 8 = 2 × 2 × 2
Example 3:

Input: 14
Output: false
Explanation: 14 is not ugly since it includes another prime factor 7.*/

var isUgly = function (num) {
  if (num === 0) return false;
  while (num != 1) {
    if (num % 5 === 0) num = num / 5;
    else if (num % 3 === 0) num = num / 3;
    else if (num % 2 === 0) num = num / 2;
    else {
      return false;
    }
  }
  return true;
};

/*Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price. */
var maxProfit = function (prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) minPrice = prices[i];
    else {
      if (prices[i] - minPrice > maxProfit) maxProfit = prices[i] - minPrice;
    }
  }
  return maxProfit;
};

/*Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.*/

var maxSubArray = function (nums) {
  let maxEndingHere = nums[0];
  let maxSoFar = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let temp = maxEndingHere + nums[i];
    maxEndingHere = Math.max(temp, nums[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
};

//balanced brackets solution

var isValid = function (s) {
  let openingBrackets = '({[';
  let bracketLookup = {
    '[': ']',
    '{': '}',
    '(': ')',
  };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (openingBrackets.includes(s[i])) {
      stack.push(s[i]);
    } else {
      if (s[i] === bracketLookup[stack[stack.length - 1]]) {
        stack.pop();
      } else return false;
    }
  }
  if (stack.length === 0) return true;
  else {
    return false;
  }
};

/*
You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Follow up:
What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

Example:

Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 */
var addTwoNumbers = function (l1, l2) {
  let arr1 = [];
  let arr2 = [];
  while (l1 || l2) {
    if (l1) {
      let currentNum = l1.val;
      arr1.push(currentNum);
      l1 = l1.next;
    }

    if (l2) {
      let currentNum = l2.val;
      arr2.push(currentNum);
      l2 = l2.next;
    }
  }
  let carry = 0;
  let arr3 = [];
  while (arr1.length > 0 || arr2.length > 0) {
    let total = 0;
    if (carry > 0) {
      total += 1;
      carry = 0;
    }
    if (arr1.length > 0 && arr2.length > 0) {
      total += arr1.pop() + arr2.pop();
    } else {
      if (arr1.length > 0) total += arr1.pop();
      if (arr2.length > 0) total += arr2.pop();
    }
    if (total >= 10) {
      carry += 1;
    }
    total = total % 10;
    arr3.push(total);
  }
  if (carry > 0) arr3.push(1);
  let head = new ListNode(arr3[arr3.length - 1]);
  if (arr3.length === 1) return head;
  let newNode = new ListNode(arr3[arr3.length - 2]);
  head.next = newNode;
  for (let i = arr3.length - 3; i >= 0; i--) {
    let next = new ListNode(arr3[i]);
    newNode.next = next;
    newNode = newNode.next;
  }
  return head;
};

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

var addTwoNumbers = function (l1, l2) {
  let l1Arr = [];
  let l2Arr = [];
  let totalArr = [];
  while (l1 || l2) {
    if (l1) {
      l1Arr.unshift(l1.val);
      l1 = l1.next;
    }
    if (l2) {
      l2Arr.unshift(l2.val);
      l2 = l2.next;
    }
  }
  let carry = 0;
  let total = 0;
  while (l1Arr.length != 0 || l2Arr.length != 0) {
    total = carry;
    carry = 0;
    if (l1Arr.length != 0 && l2Arr.length != 0) {
      total += l1Arr.pop() + l2Arr.pop();
    } else {
      if (l1Arr.length > 0) total += l1Arr.pop();
      if (l2Arr.length > 0) total += l2Arr.pop();
    }
    if (total >= 10) {
      carry += 1;
    }
    total %= 10;

    totalArr.push(total);
  }
  if (carry === 1) totalArr.push(carry);
  if (totalArr.length === 1) {
    return new ListNode(totalArr[0]);
  }

  let head = new ListNode(totalArr[0]);
  let newNode = new ListNode(totalArr[1]);
  head.next = newNode;
  for (let i = 2; i < totalArr.length; i++) {
    let next = new ListNode(totalArr[i]);
    newNode.next = next;
    newNode = newNode.next;
  }
  return head;
};

//Coin change problem. Completely misread, but should answer: If given an option of 3 coins: 1,2,5, how many coins
//will it take to make up the amount given?
var coinChange = function (amount) {
  if (amount < 0) return -1;
  let numOfCoins = 0;
  while (amount > 0) {
    if (isInteger(amount % 5)) {
      numOfCoins += amount / 5;
    } else if (isInteger(amount % 2)) {
      numOfCoins += amount / 2;
    } else {
      amount -= 1;
      numOfCoins += 1;
    }
  }
  return numOfCoins;
};

//coin change problem: min number to make amount

var coinChange = function (coins, amount) {
  let minArray = [0];
  for (let i = 0; i < amount; i++) {
    minArray.push(Infinity);
  }
  for (let i = 0; i < coins.length; i++) {
    for (let k = 1; k < minArray.length; k++) {
      if (coins[i] <= k) {
        minArray[k] = Math.min(minArray[k], minArray[k - coins[i]] + 1);
      }
    }
  }
  if (minArray[amount] === Infinity) return -1;
  return minArray[amount];
};

// Given a binary tree 117

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL.

var connect = function (root) {
  if (!root) return null;
  let node = root;
  let queue = [node];
  while (queue.length != 0) {
    let queueSize = queue.length;
    let temp = []; //this inner queue keeps track of upcoming connections to make
    for (let i = 0; i < queueSize; i++) {
      let curNode = queue.shift();
      curNode.next = queue[0]; //this does the connections for the current level of connections
      if (curNode.left) {
        temp.push(curNode.left); //these push in the next level. the inner for loop runs for the duration dependent on how many nodes are pushed in
      }
      if (curNode.right) {
        temp.push(curNode.right);
      }
    }
    queue = temp;
  }
  return node;
};


// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]


var groupAnagrams = function (strs) {
  let outputArray = []
  let sortedArray = []

  strs.forEach((current) => {
    sortedArray.push(current.split('').sort().join(''))
  })


  while (strs.length != 0) {
    let group = []
    let target = sortedArray[0]
    for (let i = 0; i < strs.length; i++) {
      let compare = sortedArray[i]
      if (compare === target) {
        group.push(strs[i])
        strs.splice(i, 1)
        sortedArray.splice(i, 1)
        i -= 1
      }
    }
    outputArray.push(group)
  }
  return outputArray
};


// Write an efficient method that checks whether any permutation ↴ of an input string is a palindrome. ↴
function hasPalindromePermutation(theString) {

  // Check if any permutation of the input is a palindrome
  if (theString.length === 0) return true
  let dict = {}
  for (let letter of theString) {
    if (!dict[letter]) dict[letter] = 1
    else delete dict[letter]
  }
  let remainingDict = Object.keys(dict).length
  if (theString.length % 2 === 0) {
    if (remainingDict != 0) return false
    return true
  }
  else {
    if (remainingDict != 1) return false
    return true
  }
}

// Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
// An empty string is also valid.

var checkValidString = function (s) {
  let lStack = []
  let starStack = []
  let index = 0
  while (index < s.length) {
    switch (s[index]) {
      case '(':
        lStack.push(index)
        break
      case '*':
        starStack.push(index)
        break
      case ')':
        if (lStack.length != 0) lStack.pop()
        else {
          if (starStack.length != 0) starStack.pop()
          else return false
        }
    }
    index += 1
  }
  let balanced = true
  lStack.forEach((current) => {
    let match = starStack.find((element) => element > current)
    if (match) starStack.splice(starStack.indexOf(match), 1)
    else balanced = false
  }) //goes through remaining to match left parens to stars
  return balanced
};


// Given two strings, one is a subsequence if all of the elements of the
// first string occur in the same order within the second string. They do
// not have to be contiguous in the second string, but order must be
// maintained. For example, given the string 'I like cheese', the words ('I',
// 'cheese') are one possible subsequence of that string. Words are space
// delimited.
// Given two strings, s and t, where t is a subsequence of s, report the
// words of s, missing in t (case sensitive), in the order they are missing.
// Example
// s = 'I like cheese'
// t = 'like'
// Then 'like' is the subsequence, and ['I', 'cheese'] is the list of missing
// words, in order.
// Function Description
// Complete the function missingWords in the editor below.
// missingWords has the following parameter(s):
// string s: a sentence of space-separated words
// string t: a sentence of space-separated words
// Returns:
// string[i]: an array of strings that contains all words in s that are
// missing from t, in the order they occur within s

function missingWords(string1, string2) {
  let str1Arr = string1.split(' ') //full sentence
  let str2Arr = string2.split(' ') //subsequence
  let allMissingWords = []
  let counter = 0
  str1A.forEach((current) => {
    if (current === str2Arr[counter]) counter++
    else allMissingWords.push(current)
  })
  return allMissingWords
}



// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.

// Note:
// You may assume that both strings contain only lowercase letters.

// canConstruct("a", "b") -> false
// canConstruct("aa", "ab") -> false
// canConstruct("aa", "aab") -> true

var canConstruct = function (ransomNote, magazine) {
  let magHash = {}
  for (let i in magazine) {
    if (!magHash[magazine[i]]) magHash[magazine[i]] = 1
    else magHash[magazine[i]] += 1
  }
  for (let i in ransomNote) {
    if (magHash[ransomNote[i]] === 0 || !magHash[ransomNote[i]]) return false
    magHash[ransomNote[i]] -= 1
  }
  return true

};


// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:

// Input: [3,2,3]
// Output: 3
// Example 2:

// Input: [2,2,1,1,1,2,2]
// Output: 2

var majorityElement = function (nums) {
  let numSize = Math.ceil(nums.length / 2)
  let numsHash = {}
  for (let i in nums) {
    if (!numsHash[nums[i]]) numsHash[nums[i]] = 1
    else numsHash[nums[i]] += 1
    if (numsHash[nums[i]] >= numSize) return nums[i]
  }
};


//invert a binary tree
//       4
//     /   \
//   2       7
//   / \   / \
// 1    3 6    9

// 4
// /   \
// 7     2
// / \   / \
// 9   6 3   1
var invertTree = function (root) {
  if (root === null) return root
  let temp = root.right
  root.right = root.left
  root.left = temp
  invertTree(root.left)
  invertTree(root.right)
  return root
};


//openasset regex q

const files = ['\\server1\\images\\Healthcare\\8342-St Botolphs Corner\\photographs\\foo.tif', '\\server1\\images\\Commercial\\9453-Range Grove\\rendered\\bar.jpg']

let regex = /\\server1\\images\\(\w+)\\([\w-\s]+)\\(\w+)\\(\w+)/
let
// let match = regex.exec(file)
//   console.log(match)
for (let i = 0; i < files.length; i++) {
  let file = files[i]
  let match = regex.exec(file)
  console.log(match[1])
  console.log(match[2])
  console.log(match[3])
  console.log(match[4])
}

/*Single Cycle Check : algoexpert
  Given array of integers where each integer reps a jump in value.

*/
function hasSingleCycle(array) {
  let indexHash = {}
  for (let i = 0; i < array.length; i++) {
    indexHash[i] = false
  }
  let curIndex = 0
  while (true) {
    let jump = 0
    if (array[curIndex] > array.length || array[curIndex] < 0) {
      jump = Math.abs(array[curIndex]) % array.length
      array[curIndex] < 0 ? curIndex -= jump : curIndex += jump
    }
    else curIndex += array[curIndex]
    if (curIndex > array.length - 1) curIndex = curIndex - array.length
    if (curIndex < 0) curIndex = array.length + (curIndex % array.length)
    if (indexHash[curIndex] === true) break
    indexHash[curIndex] = true
  }
  for (let i in indexHash) {
    if (indexHash[i] === false) return false
  }
  return true
}

/*branchsums: write a functio to add list of branch sums ordered from left to right. branch sum = sum of all values in binary tree branch / path of nodes root to leaf */
function branchSums(root) {
  const sums = []
  branchSumsHelper(root, sums)
  return sums
}

function branchSumsHelper(root, sumArray, runningSum = 0) {
  runningSum += root.value
  if (root.left) {
    branchSumsHelper(root.left, sumArray, runningSum)
  }
  if (root.right) {
    branchSumsHelper(root.right, sumArray, runningSum)
  }
  if (!root.left && !root.right) {
    sumArray.push(runningSum)
  }
}

// CodeSignal: StringsRearrangement: Given an array of equal-length strings, you'd like to know if it's possible to rearrange the order of the elements in such a way that each consecutive pair of strings differ by exactly one character. Return true if it's possible, and false if not.

//For inputArray = ["aba", "bbb", "bab"], the output should be stringsRearrangement(inputArray) = false

function getPermutations(array, length) {
  const output = []
  const swapInPlace = (a, b, arraySwap) => {
    let temp = arraySwap[a]
    arraySwap[a] = arraySwap[b]
    arraySwap[b] = temp
  }
  const generate = (n, heapArr) => {
    if (n === 1) {
      output.push(heapArr.slice())
      return
    }
    generate(n - 1, heapArr)
    for (let i = 0; i < n - 1; i++) {
      if (n % 2 === 0) {
        swapInPlace(i, n - 1, heapArr)
      }
      else {
        swapInPlace(0, n - 1, heapArr)
      }
      generate(n - 1, heapArr)
    }
  }
  generate(array.length, array)
  return output
}
function stringsRearrangement(inputArray) {
  const allPerms = getPermutations(inputArray, inputArray.length)
  for (let i = 0; i < allPerms.length; i++) {
    let valid = true
    let currentPermArr = allPerms[i]
    for (let i = 1; i < currentPermArr.length; i++) {
      let currentPermPattern = currentPermArr[i]
      let prevPermPattern = currentPermArr[i - 1]
      let numOfDifferences = 0
      for (let k = 0; k < currentPermPattern.length; k++) {
        if (currentPermPattern[k] != prevPermPattern[k]) {
          numOfDifferences += 1
        }
      }
      if (numOfDifferences != 1) {
        valid = false
        break
      }
    }
    if (valid) return true
  }
  return false
}

/*Given an array of integers nums and an integer k, determine whether there are two distinct indices i and j in the array where nums[i] = nums[j] and the absolute difference between i and j is less than or equal to k.
  For nums = [0, 1, 2, 3, 5, 2] and k = 3, the output should be
  containsCloseNums(nums, k) = true.

  There are two 2s in nums, and the absolute difference between their positions is exactly 3. */
function containsCloseNums(nums, k) {
  let duplicates = {}

  for (let i = 0; i < nums.length; i++) {
    if (!duplicates[nums[i]]) {
      duplicates[nums[i]] = [i]
    }
    else {
      let prevSighting = duplicates[nums[i]][duplicates[nums[i]].length - 1]
      if (i - prevSighting <= k) return true
      else duplicates[nums[i]].push(i)
    }
  }
  return false
}

/*You have a collection of coins, and you know the values of the coins and the quantity of each type of coin in it. You want to know how many distinct sums you can make from non-empty groupings of these coins.

Example

For coins = [10, 50, 100] and quantity = [1, 2, 1], the output should be
possibleSums(coins, quantity) = 9.

Here are all the possible sums:

50 = 50;
10 + 50 = 60;
50 + 100 = 150;
10 + 50 + 100 = 160;
50 + 50 = 100;
10 + 50 + 50 = 110;
50 + 50 + 100 = 200;
10 + 50 + 50 + 100 = 210;
10 = 10;
100 = 100;
10 + 100 = 110.
As you can see, there are 9 distinct sums that can be created from non-empty groupings of your coins. */

function possibleSums(coins, quantity) {
  let quantCounter = 0
  let hashSet = new Set()
  let currentCoinInd = 0
  while (currentCoinInd < coins.length) {
    if (quantCounter < quantity[currentCoinInd]) {
      if (hashSet.size == 0) {
        hashSet.add(coins[currentCoinInd])
      }
      else {
        let toAdd = []
        hashSet.forEach((current) => {
          toAdd.push(coins[currentCoinInd] + current)
        })
        toAdd.forEach((current) => {
          hashSet.add(current)
        })
        if (!hashSet.has(coins[currentCoinInd])) hashSet.add(coins[currentCoinInd])
      }
      quantCounter += 1
      continue
    }
    currentCoinInd += 1
    quantCounter = 0
  }
  return hashSet.size
}

// A string is said to be beautiful if each letter in the string appears at most as many times as the previous letter in the alphabet within the string; ie: b occurs no more times than a; c occurs no more times than b; etc.

// Given a string, check whether it is beautiful.

// Example

// For inputString = "bbbaacdafe", the output should be isBeautifulString(inputString) = true.

// This string contains 3 as, 3 bs, 1 c, 1 d, 1 e, and 1 f (and 0 of every other letter), so since there aren't any letters that appear more frequently than the previous letter, this string qualifies as beautiful.

// For inputString = "aabbb", the output should be isBeautifulString(inputString) = false.

// Since there are more bs than as, this string is not beautiful.

// For inputString = "bbc", the output should be isBeautifulString(inputString) = false.

// Although there are more bs than cs, this string is not beautiful because there are no as, so therefore there are more bs than as.
function isBeautifulString(inputString) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const letterHash = {}

  for (let letter of inputString) {
    if (!letterHash[letter]) letterHash[letter] = 1
    else letterHash[letter] += 1
  }
  let lastLetter = 'a'
  for (let i = 1; i < alphabet.length; i++) {
    if (letterHash[alphabet[i]]) lastLetter = alphabet[i]
  }
  let lastLetterIndex = alphabet.indexOf(lastLetter)
  for (let i = 1; i <= lastLetterIndex; i++) {
    if (letterHash[alphabet[i]] > letterHash[alphabet[i - 1]] || !letterHash[alphabet[i - 1]]) return false
  }
  return true
}

//Find if a substring is a valid substring of string, regardless of order

function findSubString(string, substring) {
  let letterHash = {}
  let ssLength = substring.length
  for (let letter of substring) {
    if (!letterHash[letter]) letterHash[letter] = 1
    else letterHash[letter] += 1
  }
  for (let i = 0; i < string.length; i++) {
    if (letterHash[string[i]]) {
      let slice = string.slice(i, i + ssLength)
      let copy = { ...letterHash }
      let possibleReturn = helper(slice, copy)
      if (possibleReturn) return true
    }
  }
  return false
}

function helper(string, letterHash) {
  //first check for stray letters
  for (let letter of string) {
    if (!letterHash[letter]) return false
  }
  for (let letter of string) {
    letterHash[letter] -= 1
  }
  let check = 0
  for (let letter in letterHash) {
    check += letterHash[letter]
  }
  if (check === 0) return true
  else return false
}

console.log(findSubString('bloomberg', 'moo'))

//same q in Leetcode
// Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.



// Example 1:

// Input: s1 = "ab" s2 = "eidbaooo"
// Output: True
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input:s1= "ab" s2 = "eidboaoo"
// Output: False




var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false
  let s1Hash = {}
  for (let letter of s1) {
    if (!s1Hash[letter]) s1Hash[letter] = 1
    else s1Hash[letter] += 1
  }
  for (let i = 0; i < s2.length - s1.length + 1; i++) {
    let s2Substring = s2.slice(i, i + s1.length)
    if (compare(s1Hash, s2Substring)) return true
  }
  return false
};

function compare(hash, substring) {
  let hash2 = {}
  for (let letter of substring) {
    if (!hash2[letter]) hash2[letter] = 1
    else hash2[letter] += 1
  }
  for (let letter in hash2) {
    if (hash2[letter] === hash[letter]) continue
    else return false
  }
  return true
}


// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

const minPathSum = (grid) => {
  const solutions = []
  for (let row in grid) {
    solutions.push(new Array(grid[0].length).fill(0))
  }
  solutions[0][0] = grid[0][0]
  for (let i = 1; i < grid[0].length; i++) {
    solutions[0][i] = solutions[0][i - 1] + grid[0][i]
  }
  for (let i = 1; i < grid.length; i++) {
    solutions[i][0] = solutions[i - 1][0] + grid[i][0]
  }
  for (let row = 1; row < grid.length; row++) {
    for (let col = 1; col < grid[0].length; col++) {
      solutions[row][col] = Math.min(solutions[row - 1][col] + grid[row][col], solutions[row][col - 1] + grid[row][col])
    }
  }
  return solutions[solutions.length - 1][solutions[0].length - 1]
}

//fibonacci w memoization
var fib = function (n) {
  const memo = {}
  function fibHelper(n) {
    if (memo[n]) return memo[n]
    if (n <= 1) memo[n] = n
    else memo[n] = (fibHelper(n - 1) + fibHelper(n - 2))
    return memo[n]
  }
  fibHelper(n)
  if (n <= 1) return n
  return memo[n - 2] + memo[n - 1]
};

/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
// [2,3,4,9,1,6,7]
// 19
*/
var rob = function (nums) {
  if (nums.length === 1) return nums[0]
  if (nums.length === 0) return 0
  let amounts = new Array(nums.length).fill(0)
  amounts[0] = nums[0]
  amounts[1] = nums[1]

  for (let i = 2; i < nums.length; i++) {
    let max = -Infinity
    for (let k = 0; k < i - 1; k++) {
      max = Math.max(max, amounts[k])
    }
    amounts[i] = max + nums[i]
  }
  let returnLargest = -Infinity
  for (let num of amounts) {
    returnLargest = Math.max(returnLargest, num)
  }
  return returnLargest
};

//Redoing coinchange to practice bottom up

var coinChange = function (coins, amount) {
  let tab = new Array(amount + 1).fill(Infinity)
  tab[0] = 0
  for (let i = 1; i < tab.length; i++) {
    for (let k = 0; k < coins.length; k++) {
      let amountLeft = i - coins[k]
      if (amountLeft >= 0 && tab[amountLeft] != Infinity) {
        tab[i] = Math.min(tab[i], tab[amountLeft] + 1)
      }
    }
  }
  if (tab[tab.length - 1] === Infinity) return -1
  return tab[tab.length - 1]
};


/*
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

Work from the end position towards the start. With each index to the left, see if that
num can reach the current index, that can eventually reach the end index
*/

var canJump = function (nums) {
  let validIndices = new Array(nums.length).fill(undefined)
  validIndices[validIndices.length - 1] = 'Good'
  let lastGoodIndex = validIndices.length - 1
  for (let i = validIndices.length - 2; i >= 0; i--) {
    if (i + nums[i] >= lastGoodIndex) {
      lastGoodIndex = i
      validIndices[i] = 'Good'
    }
  }
  if (validIndices[0] === 'Good') return true
  else return false
};


/*
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.
TLE on leetcode, works on algoexpert
*/
var jump = function (nums) {
  let successArray = new Array(nums.length).fill(Infinity)
  successArray[0] = 0
  for (let i = 1; i < successArray.length; i++) {
    for (let k = i - 1; k >= 0; k--) {
      if (k + nums[k] >= i) successArray[i] = Math.min(successArray[i], successArray[k] + 1)
    }
  }
  return successArray[successArray.length - 1]
};


//KNAPSACK
function knapsackProblem(items, capacity) {
  let ksArr = []
  //sort items by weight from lowest to highest, assign to new var, since we want the indices
  let sortedItems = [...items]
  sortedItems.sort((a, b) => {
    return a[1] - b[1]
  })
  for (let row of items) {
    ksArr.push(new Array(capacity + 1).fill(0))
  }
  //fill in first row first: assume only one item and fill in at each capacity up to target capacity
  for (let i = 0; i < ksArr[0].length; i++) {
    if (sortedItems[0][1] <= i) {
      ksArr[0][i] = sortedItems[0][0]
    }
  }
  for (let row = 1; row < ksArr.length; row++) {
    for (let col = 0; col < ksArr[row].length; col++) {
      //if item weight is less than capacity( at that column), make a decision whether this item
      //is valued higher than the previous combo at that capacity(before this item is introduced)
      if (sortedItems[row][1] <= col) {
        ksArr[row][col] = Math.max(ksArr[row - 1][col], sortedItems[row][0] + ksArr[row - 1][col - (sortedItems[row][1])])
      }
      //if item weight introduced is higher than capacity, item is skipped, and we assume best is
      //whatever the item mix was before this item is introduced.
      else ksArr[row][col] = ksArr[row - 1][col]
    }
  }
  let returnItems = []
  let returnItemIndices = []
  let row = ksArr.length - 1
  let col = capacity
  let pointer = ksArr[row][col]

  //need to traverse through the ksArray to get items that make up capacity / value
  while (pointer != 0) {
    if (row === 0) {
      returnItems.push(sortedItems[0])
      break
    }
    if (ksArr[row - 1][col] === pointer) {
      pointer = ksArr[row - 1][col]
      row -= 1
    }
    else {
      returnItems.push(sortedItems[row])
      col -= sortedItems[row][1]
      row -= 1
      pointer = ksArr[row][col]
    }
  }
  for (let returnItem of returnItems) {
    returnItemIndices.push(items.indexOf(returnItem))
  }
  return [ksArr[ksArr.length - 1][capacity], returnItemIndices]
}
/*ks array looks like this:
0:  [0, 1, 1, 1, 1, 1, 1, 1]
1:  [0, 1, 1, 4, 5, 5, 5, 5]
2:  [0, 1, 1, 4, 5, 6, 6, 9]
3:  [0, 1, 1, 4, 5, 7, 8, 9]
*/


//Design Underground System
// Implement the class UndergroundSystem that supports three methods:

// 1. checkIn(int id, string stationName, int t)

// A customer with id card equal to id, gets in the station stationName at time t.
// A customer can only be checked into one place at a time.
// 2. checkOut(int id, string stationName, int t)

// A customer with id card equal to id, gets out from the station stationName at time t.
// 3. getAverageTime(string startStation, string endStation)

// Returns the average time to travel between the startStation and the endStation.
// The average time is computed from all the previous traveling from startStation to endStation that happened directly.
// Call to getAverageTime is always valid.
// You can assume all calls to checkIn and checkOut methods are consistent. That is, if a customer gets in at time t1 at some station, then it gets out at time t2 with t2 > t1. All events happen in chronological order.
var UndergroundSystem = function () {
  this.allCheckIns = {}
  this.allCheckOuts = {}
  this.allTravelTimes = {}
};

/**
* @param {number} id
* @param {string} stationName
* @param {number} t
* @return {void}
*/
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  this.allCheckIns[id] = { stationName, t }
};

/**
* @param {number} id
* @param {string} stationName
* @param {number} t
* @return {void}
*/
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  this.allCheckOuts[id] = { stationName, t }
  if (!this.allTravelTimes[`${this.allCheckIns[id].stationName}-${stationName}`]) {
    this.allTravelTimes[`${this.allCheckIns[id].stationName}-${stationName}`] = []
    this.allTravelTimes[`${this.allCheckIns[id].stationName}-${stationName}`].push(t - this.allCheckIns[id].t)
  }
  else {
    this.allTravelTimes[`${this.allCheckIns[id].stationName}-${stationName}`].push(t - this.allCheckIns[id].t)
  }
};

/**
* @param {string} startStation
* @param {string} endStation
* @return {number}
*/
UndergroundSystem.prototype.getAverageTime = function (startStation, endStation) {
  let stationTimes = this.allTravelTimes[`${startStation}-${endStation}`]
  return stationTimes.reduce((accum, current) => {
    return accum += current
  }, 0) / stationTimes.length
};

// We are given an array asteroids of integers representing asteroids in a row.

// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.
//stack Q
var asteroidCollision = function (asteroids) {
  debugger
  let returnAsteroids = [asteroids[0]]
  for (let i = 1; i < asteroids.length; i++) {
    if (returnAsteroids[returnAsteroids.length - 1] > 0 && asteroids[i] < 0) {
      while (returnAsteroids.length >= 0) {
        if (returnAsteroids[returnAsteroids.length - 1] < 0) {
          returnAsteroids.push(asteroids[i])
          break
        }
        if (asteroids[i] * -1 === returnAsteroids[returnAsteroids.length - 1]) {
          returnAsteroids.pop()
          break
        }
        if (asteroids[i] * -1 > returnAsteroids[returnAsteroids.length - 1]) {
          returnAsteroids.pop()
        }
        else {
          if (returnAsteroids.length === 0) {
            returnAsteroids.push(asteroids[i])
            break
          }
          break
        }
      }
    }
    else {
      returnAsteroids.push(asteroids[i])
    }
  }
  return returnAsteroids
};

// Given a date string in the form Day Month Year, where:

// Day is in the set {"1st", "2nd", "3rd", "4th", ..., "30th", "31st"}.
// Month is in the set {"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"}.
// Year is in the range [1900, 2100].
// Convert the date string to the format YYYY-MM-DD, where:

// YYYY denotes the 4 digit year.
// MM denotes the 2 digit month.
// DD denotes the 2 digit day.

// var reformatDate = function(date) {
//   const monthsHash = {
//       Jan:'01',
//       Feb:'02',
//       Mar:'03',
//       Apr:'04',
//       May:'05',
//       Jun:'06',
//       Jul:'07',
//       Aug:'08',
//       Sep:'09',
//       Oct:'10',
//       Nov:'11',
//       Dec:'12'
//   }
//   let formattedDate = ''
//   let splittedDate = date.split(' ')
//   formattedDate+=splittedDate[2]+'-'
//   formattedDate+=monthsHash[splittedDate[1]]+'-'
//   let formattedDay = splittedDate[0].slice(0,-2)
//   if(formattedDay.length===1)formattedDay = '0' + formattedDay
//   formattedDate+=formattedDay
//   return formattedDate
// };



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

//Given an unsorted array of integers, find the length of longest increasing subsequence.
var lengthOfLIS = function (nums) {
  if (nums.length === 0) return 0
  let tab = [1]
  for (let i = 1; i < nums.length; i++) {
    let currentHighest = 1
    for (let k = i - 1; k >= 0; k--) {
      if (nums[k] < nums[i]) {
        currentHighest = Math.max(tab[k] + 1, currentHighest)
      }
    }
    tab.push(currentHighest)
  }
  let longest = 0
  for (let streak of tab) {
    longest = Math.max(longest, streak)
  }
  return longest
};

/*MAx Sum Increasing Subsequence from algoexpert:
  write a function that takes in a non-empty array of integers & returns the greatest sum that can be generated
  from a strictly-increasing subsequence, as well as an array of the numbers in that subsequence

  input:maxSumIncreasingSubsequence([10, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  output:[45,[1,2,3,4,5,6,7,8,9]]
*/

function maxSumIncreasingSubsequence(array) {
  let totals = [array[0]]
  let lastIndexTracker = [0]
  let maxSum = array[0]
  for (let i = 1; i < array.length; i++) {
    let highestTotal = array[i]
    let lastIndex = i
    for (let k = i - 1; k >= 0; k--) {
      if (array[i] > array[k] && array[i] + totals[k] > highestTotal) {
        highestTotal = array[i] + totals[k]
        lastIndex = k
      }
    }
    maxSum = Math.max(maxSum, highestTotal)
    totals.push(highestTotal)
    lastIndexTracker.push(lastIndex)
  }
  let indexOfMaxSum = totals.indexOf(maxSum)
  let path = []
  while (true) {
    path.push(array[indexOfMaxSum])
    if (indexOfMaxSum === lastIndexTracker[indexOfMaxSum]) break
    indexOfMaxSum = lastIndexTracker[indexOfMaxSum]
  }
  path.reverse()
  let returnSum = path.reduce((accum, current) => {
    return accum += current
  }, 0)
  return [returnSum, path]
}

// Given a collection of intervals, merge all overlapping intervals.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

var merge = function (intervals) {
  if (intervals.length === 0) return []
  intervals.sort((a, b) => {
    return a[0] - b[0]
  })
  const mergedIntervals = [intervals[0]]
  for (let i = 1; i < intervals.length; i++) {
    let currentInterval = intervals[i]
    let latestIntervalInReturn = mergedIntervals[mergedIntervals.length - 1]
    if (currentInterval[0] >= latestIntervalInReturn[0] && currentInterval[0] <= latestIntervalInReturn[1]) {
      mergedIntervals[mergedIntervals.length - 1][1] = Math.max(currentInterval[1], mergedIntervals[mergedIntervals.length - 1][1])
    }
    else mergedIntervals.push(currentInterval)
  }
  return mergedIntervals
};

// We are given a list  schedule of employees, which represents the working time for each employee.

// Each employee has a list of non-overlapping  Intervals, and these intervals are in sorted order.

// Return the list of finite intervals representing common, positive-length free time for  all  employees, also in sorted order.

const freeTime = (schedules) => {
  let flattened = schedules.flat()
  flattened.sort((a, b) => { return a[0] - b[0] })
  let mergedSchedules = [flattened[0]]
  for (let i = 1; i < flattened.length; i++) {
    let latestInMerged = mergedSchedules[mergedSchedules.length - 1]
    if (flattened[i][0] >= latestInMerged[0] && flattened[i][0] <= latestInMerged[1]) {
      mergedSchedules[mergedSchedules.length - 1][1] = Math.max(mergedSchedules[mergedSchedules.length - 1][1], flattened[i][1])
    }
    else mergedSchedules.push(flattened[i])
  }
  const freeTimes = []
  if (mergedSchedules.length <= 1) return mergedSchedules
  for (let i = 0; i < mergedSchedules.length - 1; i++) {
    freeTimes.push([mergedSchedules[i][1], mergedSchedules[i + 1][0]])
  }
  return freeTimes
}

freeTime([[[1, 3], [6, 7]], [[2, 4]], [[2, 5], [9, 12]]])


//Given a string s, return the longest palindromic substring in s.
// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
var longestPalindrome = function (s) {
  let longestPalin = ''
  for (let i = 0; i < s.length; i++) {
    let palin1 = palindromeChecker(s, i, i)
    let palin2 = palindromeChecker(s, i, i + 1)
    let possibleLongest = palin1.length >= palin2.length ? palin1 : palin2
    longestPalin = longestPalin.length >= possibleLongest.length ? longestPalin : possibleLongest
  }
  return longestPalin
};
function palindromeChecker(string, left, right) {
  if (string[left] != string[right]) return string[left]
  while (left >= 0 && right < string.length && string[left] === string[right]) {
    left -= 1
    right += 1
  }
  return string.slice(left + 1, right)
}

// Given an array of meeting time intervals consisting of start and end
// times [s1, e1], [s2, e2], ... , determine if a person could attend all meetings.
// ---------------------------
// canAttendMeetings([[0, 30], [5, 10], [15, 20]]) --> false
// canAttendMeetings([[7, 10], [2, 4]]) --> true

const canAttendMeetings = (meetings) => {
  meetings.sort((a, b) => {
    return a[0] - b[0]
  })
  for (let i = 1; i < meetings.length; i++) {
    let startTime = meetings[i][0]
    if (startTime >= meetings[i - 1][0] && startTime <= meetings[i - 1][1]) return false
    else continue
  }
  return true
}


// Isomorphic Strings
// Given two strings s and t, determine if they are isomorphic.

// Two strings are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

// Example 1:

// Input: s = "egg", t = "add"
// Output: true

var isIsomorphic = function (s, t) {
  if (s.length != t.length) return false
  let hash = {}
  let hash2 = {}
  let array1 = []
  let array2 = []
  let counter1 = 1
  let counter2 = 1
  for (let i = 0; i < s.length; i++) {
    if (!hash[s[i]]) {
      hash[s[i]] = counter1
      array1.push(hash[s[i]])
      counter1 += 1
    }
    else array1.push(hash[s[i]])
    if (!hash2[t[i]]) {
      hash2[t[i]] = counter2
      array2.push(hash2[t[i]])
      counter2 += 1
    }
    else array2.push(hash2[t[i]])
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] != array2[i]) return false
  }
  return true
};


// Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

//Brute force (TLE)

const lengthOfLongestSubstring = (str) => {
  if (str.length === 0) return 0
  let returnLongest = ' '
  for (let i = 0; i < str.length; i++) {
    for (let k = i + 1; k < str.length; k++) {
      let subString = str.slice(i, k + 1)
      let subStringTrueFalse = checkUnique(subString)
      if (subStringTrueFalse && subString.length > returnLongest.length) returnLongest = subString
    }
  }
  return returnLongest.length
}

function checkUnique(string) {
  let tracker = {}
  for (let letter of string) {
    if (!tracker[letter]) {
      tracker[letter] = true
    }
    else return false
  }
  return true
}

//More optimized

const lengthOfLongestSubstring = (str) => {
  let tracker = {}
  let tempLongest = ''
  let returnLongest = ''
  debugger
  for (let i = 0; i < str.length; i++) {
    if (!tracker[str[i]] && tracker[str[i]] != 0) {
      tracker[str[i]] = i
      tempLongest += str[i]
    }
    else {
      if (tempLongest.length > returnLongest.length) {
        returnLongest = tempLongest
      }
      tempLongest = ''
      i = tracker[str[i]]
      tracker = {}
    }
  }
  if (tempLongest.length > returnLongest.length) return tempLongest.length
  return returnLongest.length
}

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


// Given 2 strings of random length, determine what the single "extra" character is.
// All ASCII characters allowed, case-sensitive.
// StrA can be > or < or = to StrB length

// */

function findExtra(strA, strB) {
  if (Math.abs(strA.length - strB.length) != 1) return false

  let hash = {}
  let shorterString = strA.length < strB.length ? strA : strB
  let longerString = strA.length < strB.length ? strB : strA

  for (let i = 0; i < shorterString.length; i++) {
    if (!hash[shorterString[i]]) {
      hash[shorterString[i]] = 1
    }
    else hash[shorterString[i]] += 1
  }
  for (let i = 0; i < longerString.length; i++) {
    if (hash[longerString[i]]) {
      hash[longerString[i]] -= 1
      if (hash[longerString[i]] === 0) {
        delete hash[longerString[i]]
      }
    }
    else return longerString[i]
  }
  return false
}

// Remove All Adjacent Duplicates in String I
var removeDuplicates = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      s = s.slice(0, i) + s.slice(i + 2)
      i = -1
    }
  }
  return s
};

// Remove All Adjacent Duplicates in String II
var removeDuplicates = function (s, k) {
  let hashCheck = {}
  for (let i = 0; i < s.length; i++) {
    if (hashCheck[s[i]]) {
      hashCheck[s[i]] += 1
      if (hashCheck[s[i]] === k) {
        s = s.slice(0, (i - k) + 1) + s.slice(i + 1)
        i = -1
        hashCheck = {}
      }
    }
    else {
      hashCheck = {}
      hashCheck[s[i]] = 1
    }
  }
  return s
};

// Given a string s and a string t, check if s is subsequence of t.

// A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).

// Follow up:
// If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B, and you want to check one by one to see if T has its subsequence. In this scenario, how would you change your code?

// Credits:
// Special thanks to @pbrother for adding this problem and creating all test cases.

var isSubsequence = function (s, t) {
  if (s.length > t.length) return false
  if (s === '') return true
  let shortIndex = 0
  for (let i = 0; i < t.length; i++) {
    if (s[shortIndex] === t[i]) shortIndex += 1
    if (shortIndex === s.length) return true
  }
  return false
};

//num islands
var numIslands = function (grid) {
  let islandCount = 0
  function helper(row, column) {
    if (row >= 0 && row < grid.length && column >= 0 && column < grid[row].length && grid[row][column] === '1') {
      grid[row][column] = '2'
      helper(row - 1, column)
      helper(row + 1, column)
      helper(row, column - 1)
      helper(row, column + 1)
    }
  }
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[row].length; column++) {
      let land = grid[row][column]
      if (grid[row][column] === '1') {
        helper(row, column)
        islandCount += 1
      }
    }
  }
  return islandCount
};

//Max Area of Island 695

var maxAreaOfIsland = function (grid) {
  let returnMax = 0
  let currentMax = 0
  function helper(row, column) {
    if (row >= 0 && row < grid.length && column >= 0 && column < grid[row].length && grid[row][column] === 1) {
      currentMax += 1
      grid[row][column] = 2
      helper(row - 1, column)
      helper(row + 1, column)
      helper(row, column - 1)
      helper(row, column + 1)
    }
  }
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[row].length; column++) {
      let land = grid[row][column]
      if (grid[row][column] === 1) {
        helper(row, column)
        returnMax = Math.max(returnMax, currentMax)
        currentMax = 0
      }
    }
  }
  return returnMax
};


// A message containing letters from A-Z is being encoded to numbers using the following mapping:

// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26
// Given a non-empty string containing only digits, determine the total number of ways to decode it.

// The answer is guaranteed to fit in a 32-bit integer.

// Example 1:

// Input: s = "12"
// Output: 2
// Explanation: It could be decoded as "AB" (1 2) or "L" (12).

var numDecodings = function (s) {
  //build up dp array. first check 1 and 2 chars in string. '0' on its own is not valid
  if (s[0] === '0') return 0;
  if (s.length === 1) return 1
  let dp = [1]
  if (s[1] === '0') {
    if (s[0] === '1' || s[0] === '2') dp[1] = 1
    else return 0
  }
  else {
    if ((s[0] === '1' || s[0] === '2') && parseInt(s[0] + s[1]) <= 26) dp[1] = 2
    else dp[1] = 1
  }
  if (s.length === 2) return dp[1]
  //since '0' by itself is not valid, check if it can be part of prev char code.
  for (let i = 2; i < s.length; i++) {
    if (s[i] === '0') {
      if (s[i - 1] === '1' || s[i - 1] === '2') {
        dp.push(dp[dp.length - 2])
      }
      else return 0
    }
    else {
      //if num is between 10 and 26, it can be decode in two ways. ex "15" and "1,5"
      let num = parseInt(s[i - 1] + s[i])
      if (num <= 26 && num > 10) {
        dp.push(dp[i - 2] + dp[i - 1])
      }
      else dp.push(dp[i - 1])
    }
  }
  //after array is built up, return last number that represents last possibilities
  return dp[dp.length - 1]
};

//Number of Matching Subsequences

// Given string S and a dictionary of words words, find the number of words[i] that is a subsequence of S.

// Example :
// Input:
// S = "abcde"
// words = ["a", "bb", "acd", "ace"]
// Output: 3
// Explanation: There are three words in words that are a subsequence of S: "a", "acd", "ace".
var numMatchingSubseq = function (S, words) {
  let matches = 0
  for (let word of words) {
    if (wordCheck(S, word)) matches += 1
  }
  return matches
};

function wordCheck(string, word) {
  let stringPointer = 0
  let wordPointer = 0
  while (stringPointer < string.length) {
    if (word[wordPointer] === string[stringPointer]) wordPointer += 1
    if (wordPointer === word.length) return true
    stringPointer += 1
  }
  return false
}


//Spiral Matrix
// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

// Example 1:

// Input:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:

// Input:
// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

var spiralOrder = function (matrix) {
  if (matrix.length === 0) return []
  let spiralReturn = []
  let order = ['fr', 'lc', 'lr', 'fc']
  let orderCount = 0
  let firstRow = 0
  let lastRow = matrix.length - 1
  let firstColumn = 0
  let lastColumn = matrix[0].length - 1

  while (firstRow <= lastRow && firstColumn <= lastColumn) {
    if (order[orderCount] === 'fr') {
      for (let column = firstColumn; column <= lastColumn; column++) {
        spiralReturn.push(matrix[firstRow][column])
      }
      firstRow += 1
    }
    if (order[orderCount] === 'lc') {
      for (let row = firstRow; row <= lastRow; row++) {
        spiralReturn.push(matrix[row][lastColumn])
      }
      lastColumn -= 1
    }
    if (order[orderCount] === 'lr') {
      for (let column = lastColumn; column >= firstColumn; column--) {
        spiralReturn.push(matrix[lastRow][column])
      }
      lastRow -= 1
    }
    if (order[orderCount] === 'fc') {
      for (let row = lastRow; row >= firstRow; row--) {
        spiralReturn.push(matrix[row][firstColumn])
      }
      firstColumn += 1
    }
    if (orderCount === order.length - 1) orderCount = 0
    else orderCount += 1
  }
  return spiralReturn
};

// 152. Maximum Product Subarray

// Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

// Example 1:

// Input: [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

var maxProduct = function (nums) {
  if (nums.length === 1) return nums[0]
  if (nums.length === 0) return 0

  let returnMax = nums[0]
  let prevMaxProduct = nums[0]
  let prevMinProduct = nums[0]

  for (let i = 1; i < nums.length; i++) {
    let curMinProduct = Math.min(prevMaxProduct * nums[i], prevMinProduct * nums[i], nums[i])
    let curMaxProduct = Math.max(prevMaxProduct * nums[i], prevMinProduct * nums[i], nums[i])
    returnMax = Math.max(returnMax, curMaxProduct)
    prevMaxProduct = curMaxProduct
    prevMinProduct = curMinProduct
  }
  return returnMax
};


var merge = function (nums1, m, nums2, n) {
  let pointer1 = 0
  let pointer2 = nums1.length
  let pointer3 = m
  for (let i = 0; i < nums2.length; i++) {
    nums1.push(nums2[i])
  }
  for (let i = pointer2; i < nums1.length; i++) {
    if (nums1[i] <= nums1[pointer1]) {
      nums1[pointer3] = nums1[pointer1]
      nums1[pointer1] = nums1[i]
      nums1[i] = 0
      pointer3 += 1
    }
    pointer1 += 1
  }
  while (pointer3 < m + n) {
    nums1[pointer3] = nums1[pointer3 + n]
    nums1[pointer3 + n] = 0
    pointer3 += 1
  }
  console.log(nums1)
};

//<Merge Sorted Array

// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.
// Example:

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]

var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1
  let p2 = n - 1
  let p3 = nums1.length - 1
  while (p2 >= 0) {
    if (nums1[p1] >= nums2[p2]) {
      nums1[p3] = nums1[p1]
      p1 -= 1
    }
    else {
      nums1[p3] = nums2[p2]
      p2 -= 1
    }
    p3 -= 1
  }
}
// You are given an integer array nums sorted in ascending order, and an integer target.

// Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// If target is found in the array return its index, otherwise, return -1.

// Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

var search = function (nums, target) {
  if (nums.length === 1) {
    if (target != nums[0]) return -1
    else return 0
  }
  let left = 0
  let right = nums.length - 1
  let pivot
  while (true) {
    let middle = Math.floor((left + right) / 2)
    if (nums[left + 1] <= nums[left]) {
      pivot = left + 1
      break
    }
    if (middle === left) {
      pivot = left
      break
    }
    if (nums[right] < nums[middle]) left = middle
    else right = middle
  }
  left = 0
  right = nums.length - 1
  while (nums[pivot] != target) {
    if (target >= nums[pivot] && target <= nums[right]) left = pivot
    else right = pivot - 1
    pivot = Math.floor((left + right) / 2)
    if (nums[left] === target) return left
    if (nums[right] === target) return right
    if (left === pivot || right === pivot) return -1
  }
  return pivot
}

// 118. Pascal's Triangle
// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.


// In Pascal's triangle, each number is the sum of the two numbers directly above it.

var generate = function (numRows) {
  if (numRows === 0) return []
  if (numRows === 1) return [[1]]
  const rows = [[1], [1, 1]]
  for (let i = 2; i < numRows; i++) {
    rows.push(pascalRow(rows[rows.length - 1]))
  }
  return rows
};

function pascalRow(array) {
  let returnRow = [1]
  for (let i = 0; i < array.length - 1; i++) {
    returnRow.push(array[i] + array[i + 1])
  }
  returnRow.push(1)
  return returnRow
}


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


// Integer to Roman
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral.



// Example 1:

// Input: num = 3
// Output: "III"

var intToRoman = function (num) {
  const romeHash = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  }
  let toString = num.toString()
  let multiple = 10 ** toString.length
  let returnRoman = ''
  for (let i = 0; i < toString.length; i++) {
    multiple /= 10
    let currentInt = multiple * parseInt(toString[i])
    if (romeHash[currentInt]) returnRoman += romeHash[currentInt]
    else returnRoman += romanCalc(currentInt, parseInt(toString[i]), romeHash)
  }
  return returnRoman
};
function romanCalc(num, val, table) {
  let numToMultiply = num / val
  let returnString = ''
  if (val > 5 && val < 9) {
    returnString += table[numToMultiply * 5]
    for (let i = 0; i < val - 5; i++) {
      returnString += table[numToMultiply]
    }
  }
  else {
    for (let i = 0; i < val; i++) {
      returnString += table[numToMultiply]
    }
  }
  return returnString
}

// 451. Sort Characters By Frequency

// Given a string, sort it in decreasing order based on the frequency of characters.

var frequencySort = function (s) {
  const freq = {}
  for (let letter of s) {
    if (!freq[letter]) freq[letter] = 1
    else freq[letter] += 1
  }
  let letters = Object.keys(freq)
  letters.sort((a, b) => {
    return freq[b] - freq[a]
  })
  let returnString = ''
  for (let i = 0; i < letters.length; i++) {
    let curLetter = letters[i]
    for (let k = 0; k < freq[curLetter]; k++) {
      returnString += curLetter
    }
  }
  return returnString
};


// 1029. Two City Scheduling

// A company is planning to interview 2n people. Given the array costs where costs[i] = [aCosti, bCosti], the cost of flying the ith person to city a is aCosti, and the cost of flying the ith person to city b is bCosti.

// Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.

var twoCitySchedCost = function (costs) {
  costs.sort((person1, person2) => {
    return Math.abs(person2[0] - person2[1]) - Math.abs(person1[0] - person1[1])
  })
  let cityA = 0
  let cityAPeople = 0
  let cityB = 0
  let cityBPeople = 0
  for (let person of costs) {
    if (cityBPeople === costs.length / 2) {
      cityA += person[0]
      continue
    }
    if (cityAPeople === costs.length / 2) {
      cityB += person[1]
      continue
    }
    if (person[0] < person[1]) {
      cityA += person[0]
      cityAPeople += 1
    }
    else {
      cityB += person[1]
      cityBPeople += 1
    }
  }
  return cityA + cityB
};


// Purhcasing Supplies
// manufacturing company that provides customers with free containers to ship supplies. You have a cost of containers, an initial budget, a number of containers that need to be traded in for a free one.

// example:
// n(budget) = 4;
// cost= 1;
// m(free container) = 2; (trade 2, get 1 free)

// first buy 4 containers with the entire budget bc one container costs 1;

// 4 => 2 => 1
//  output = 7 (total num of containers used)

//  input:
//  n = 6;
//  cost = 2;
//  m = 2;

//  3 + 1 + 1 = 5
//  output = 5;
// */

// 746. Min Cost Climbing Stairs
// On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).

// Once you pay the cost, you can either climb one or two steps. You need to find minimum cost to reach the top of the floor, and you can either start from the step with index 0, or the step with index 1.

// Example 1:
// Input: cost = [10, 15, 20]
// Output: 15
// Explanation: Cheapest is start on cost[1], pay that cost and go to the top.
// Example 2:
// Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
// Output: 6
// Explanation: Cheapest is start on cost[0], and only step on 1s, skipping cost[3].

var minCostClimbingStairs = function (cost) {
  if (cost.length === 2) return Math.min(cost[0], cost[1])
  //array represents final and lowest cost to climb all stairs assuming that particular element in cost is the last one
  const dp = [cost[0], Math.min(cost[1], cost[1] + cost[0])]
  for (let i = 2; i < cost.length; i++) {
    dp.push(cost[i] + Math.min(dp[i - 2], dp[i - 1]))
  }
  // then you return the lowest of the last two numbers in the array, since you can take either one or two steps
  return Math.min(dp[dp.length - 1], dp[dp.length - 2])
};

// 1512. Number of Good Pairs
// Given an array of integers nums.

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.



// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.


var numIdenticalPairs = function (nums) {
  let goodPairs = 0
  let hash = {}
  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = { frequency: 1, combo: 0 }
    } else {
      hash[nums[i]].combo += hash[nums[i]].frequency
      hash[nums[i]].frequency += 1
    }
  }
  for (let num in hash) {
    goodPairs += hash[num].combo
  }
  return goodPairs
};

/*
Order Transactions:

sort a list of transactions by order of occurance first then sort by decendind order Alphabetically;

Example:
input: ['can','bar', 'bar', 'bar',];
output: ['bar 3', 'can 1'];

input: ['banana', 'apple', 'bar'];
output: ['apple 1', 'banana 1', 'bar 1'];

input: ['kkldp','kkldp', 'kkldp', 'zzxl', 'aabbs', 'bbuuy']

output: ['kkldp 3','aabbs 1', 'bbuuy 1', 'zzxl 1']
*/
function transactions(array){
  let occurance = {}

  for(let item of array){
    if(!occurance[item])occurance[item]=1
    else occurance[item] +=1
  }
  let returnArr = []
  for(let item in occurance){
    returnArr.push(`${item} ${occurance[item]}`)
  }
  returnArr.sort((a,b)=>{
    if(parseInt(b[b.length-1]) != parseInt(a[a.length-1])){
      return parseInt(b[b.length-1])-parseInt(a[a.length-1])
    }
    return a.split(' ')[0].localeCompare(b.split(' ')[0])
    })
  return returnArr
}

/*
Setup:
a word has a char code 'A - Z' 65 - 92
                        'a - z' 97 - 123
                        ' ' 32
given the string 'Find the truth ' in char code is
'23401611711411611231014016112300101150107'
*/

function decode(string){
  let dict = {}
  dict[32] = ' '
  for(let i = 65;i<=90;i++){
    let letter = String.fromCharCode(i)
    dict[i] = letter
  }
  for(let i = 97;i<123;i++){
    let letter = String.fromCharCode(i)
    dict[i] = letter
  }
  let index = string.length
  let returnString = ''
  while(string[index-1]){
    let two = string.slice(index-2,index).split('').reverse().join('')
    if(dict[two]){
      returnString+=dict[two]
      index-=2
    }
    else {
      returnString+=dict[string.slice(index-3,index).split('').reverse().join('')]
      index-=3
    }
  }
  return returnString
}

// 1450. Number of Students Doing Homework at a Given Time
// Given two integer arrays startTime and endTime and given an integer queryTime.

// The ith student started doing their homework at the time startTime[i] and finished it at time endTime[i].

// Return the number of students doing their homework at time queryTime. More formally, return the number of students where queryTime lays in the interval [startTime[i], endTime[i]] inclusive.



// Example 1:

// Input: startTime = [1,2,3], endTime = [3,2,7], queryTime = 4
// Output: 1
// Explanation: We have 3 students where:
// The first student started doing homework at time 1 and finished at time 3 and wasn't doing anything at time 4.
// The second student started doing homework at time 2 and finished at time 2 and also wasn't doing anything at time 4.
// The third student started doing homework at time 3 and finished at time 7 and was the only student doing homework at time 4.

var busyStudent = function(startTime, endTime, queryTime) {
  let count = 0;
    for(let i = 0; i<startTime.length;i++){
      if(queryTime >= startTime[i] && queryTime <= endTime[i]) count+=1
    }
  return count;
};

// Given the array restaurants where  restaurants[i] = [idi, ratingi, veganFriendlyi, pricei, distancei]. You have to filter the restaurants using three filters.

// The veganFriendly filter will be either true (meaning you should only include restaurants with veganFriendlyi set to true) or false (meaning you can include any restaurant). In addition, you have the filters maxPrice and maxDistance which are the maximum value for price and distance of restaurants you should consider respectively.

// Return the array of restaurant IDs after filtering, ordered by rating from highest to lowest. For restaurants with the same rating, order them by id from highest to lowest. For simplicity veganFriendlyi and veganFriendly take value 1 when it is true, and 0 when it is false.



// Example 1:

// Input: restaurants = [[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]], veganFriendly = 1, maxPrice = 50, maxDistance = 10
// Output: [3,1,5]
// Explanation:
// The restaurants are:
// Restaurant 1 [id=1, rating=4, veganFriendly=1, price=40, distance=10]
// Restaurant 2 [id=2, rating=8, veganFriendly=0, price=50, distance=5]
// Restaurant 3 [id=3, rating=8, veganFriendly=1, price=30, distance=4]
// Restaurant 4 [id=4, rating=10, veganFriendly=0, price=10, distance=3]
// Restaurant 5 [id=5, rating=1, veganFriendly=1, price=15, distance=1]
// After filter restaurants with veganFriendly = 1, maxPrice = 50 and maxDistance = 10 we have restaurant 3, restaurant 1 and restaurant 5 (ordered by rating from highest to lowest).

var filterRestaurants = function(restaurants, veganFriendly, maxPrice, maxDistance) {
  const found = []
  // filter out the restaurants
  for(let i = 0; i < restaurants.length; i++){
    let curr = restaurants[i]
    let isVegan = curr[2]
    let cost = curr[3]
    let dist = curr[4]
    if(cost <= maxPrice && dist <= maxDistance){
      if(!veganFriendly){
        found.push(curr)
      } else {
        if(veganFriendly && isVegan){
          found.push(curr)
        }
      }
    }
  }
  // arrange in order
  found.sort((a, b) => {
    if(b[1] === a[1]){
      return b[0] - a[0]
    } else {
      return b[1] - a[1]
    }
  })
  return found.map(e => e[0]) // should be RATING DESC (if tie, DESC ID)
};

// Given an array of integers, find the subset of non-adjacent elements with the maximum sum. Calculate the sum of that subset.
// Sample Input
// 5
// 3 5 -7 8 10

// Sample Output
// 15
function maxSubsetSum(arr) {
  if(arr.length===1)return arr[0]
  if(arr.length===2)return Math.max(arr[0],arr[1])
  let dpArr = [arr[0],Math.max(arr[0],arr[1])]
  let currentMax = Math.max(arr[0],arr[1])
  for(let i = 2;i<arr.length;i++){
      let maxHere = Math.max((dpArr[i-2]+arr[i]),dpArr[i-1], dpArr[i-2], arr[i],currentMax)
      currentMax = maxHere
      dpArr.push(maxHere)
  }
  return dpArr[dpArr.length-1]
}

// Given a string, find the length of the longest substring T that contains at most k distinct characters.

// Example 1:

// Input: s = "eceba", k = 2
// Output: 3
// Explanation: T is "ece" which its length is 3.
// Example 2:

// Input: s = "aa", k = 1
// Output: 2
// Explanation: T is "aa" which its length is 2.


var lengthOfLongestSubstringKDistinct = function(s, k) {
  if(k===0)return 0
  let hash = {}
  let longest = 0
  let tempLongest = 0
  let right = 0
  let left = 0
  while(right <s.length){
      if(Object.keys(hash).length<=k){
          if(!hash[s[right]]){
          hash[s[right]]=1
          }
          else hash[s[right]]+=1
          if(Object.keys(hash).length<=k){
              right+=1
              tempLongest+=1
          }
      }
      else{
          longest = Math.max(longest,tempLongest)
          delete hash[s[right]]
          longest = Math.max(longest,tempLongest)
          hash[s[left]]-=1
          if(hash[s[left]]===0){
              delete hash[s[left]]
          }
          left+=1
          tempLongest-=1
      }
  }
  return Math.max(longest,tempLongest)
};

// 1143. Longest Common Subsequence
// Given two strings text1 and text2, return the length of their longest common subsequence.
// A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.
// If there is no common subsequence, return 0.

// Example 1:
// Input: text1 = "abcde", text2 = "ace"
// Output: 3
// Explanation: The longest common subsequence is "ace" and its length is 3.

var longestCommonSubsequence = function(text1, text2) {
  let longerStr = text1.length > text2.length ? text1:text2
  let shorterStr = text1 === longerStr ? text2:text1
  let memo = createMemo(longerStr.length,shorterStr.length)
  for(let i = 0;i<shorterStr.length;i++){
      for(let k = 0;k<longerStr.length;k++){
          let top = memo[i-1] ? memo[i-1][k]:0
          let left = memo[i][k-1] ? memo[i][k-1]:0
          if(longerStr[k]===shorterStr[i]){
              let topLeft
              if(memo[i-1]){
                  if(memo[i-1][k-1])topLeft = memo[i-1][k-1]
                  else topLeft = 0
              }//this part is so dumb. Need to refactor.
              else topLeft = 0
              memo[i][k] = topLeft+=1
          }
          else memo[i][k]=Math.max(top,left)
      }
  }
  return memo[shorterStr.length-1][longerStr.length-1]
};

function createMemo(w,h){
  let memo = []
  for(let i = 0;i<h;i++){
      let newRow = new Array(w).fill(0)
      memo.push(newRow)
  }
  return memo
}

// 516. Longest Palindromic Subsequence
// Given a string s, find the longest palindromic subsequence's length in s. You may assume that the maximum length of s is 1000.

// Example 1:
// Input:

// "bbbab"
// Output:
// 4
// One possible longest palindromic subsequence is "bbbb".
// "agbdba"
// Output:
// 5
// abdba
var longestPalindromeSubseq = function(s) {
  let memo = createMemo(s)
  let counter = 1
  for(let i = 0 ;i<memo.length;i++){
      memo[i][i] = 1
  }
  while(counter < s.length){
      let firstLetter = 0
      debugger
      while(firstLetter+counter < s.length){
              let bottomLongestPalin = firstLetter!=s.length ? memo[firstLetter+1][firstLetter+counter] : 1
              let leftLongestPalin = firstLetter+counter!=0 ? memo[firstLetter][firstLetter+counter-1]:1
              let maxPalinSoFar = Math.max(bottomLongestPalin,leftLongestPalin)
          if(s[firstLetter]===s[firstLetter+counter]){
              memo[firstLetter][firstLetter+counter]= memo[firstLetter+1][firstLetter+counter-1]+2
          }
          else{
              memo[firstLetter][firstLetter+counter]= maxPalinSoFar
          }
          firstLetter+=1
      }
      counter+=1
  }
  return memo[0][s.length-1]
};
function createMemo(string){
  let memo = []
  for(let i=0;i<string.length;i++){
      memo.push(new Array(string.length).fill(0))
  }
  return memo
}

// 673. Number of Longest Increasing Subsequence

// Given an integer array nums, return the number of longest increasing subsequences.

// Notice that the sequence has to be strictly increasing.

// Example 1:
// Input: nums = [1,3,5,4,7]
// Output: 2
// Explanation: The two longest increasing subsequences are [1, 3, 4, 7] and [1, 3, 5, 7].

var findNumberOfLIS = function(nums) {
  let memo = new Array(nums.length).fill(1)//how long the sequence is at each index
  let count = new Array(nums.length).fill(1)// the number of longest subsequences there is
  for(let i = 1;i<nums.length;i++){
      for(let j = 0;j<i;j++){
          if(nums[j] < nums[i]){
              if(memo[j]+1 > memo[i]){
                  memo[i] = memo[j]+1
                  count[i] = count[j]//this means there's a longer subseuence in the array. count is taken from previous biggest count.
              }
              else if(memo[j]+1===memo[i]){//this means that there's a subsequence that is the same length as a previous subsequence. count is added on to current count
                  count[i]+=count[j]
              }
          }
      }
  }
  let longest = 0
  let returnCount = 0
  for(let i=0;i<memo.length;i++){
      if(memo[i] > longest){
          longest = memo[i]
      }
  }
  for(let i = 0;i<memo.length;i++){
      if(memo[i]===longest)returnCount+=count[i]
  }
  return returnCount
};

// 239. Sliding Window Maximum
// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation:
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7


var maxSlidingWindow = function(nums, k) {
  let head = new Node(nums[0])
  let reset = head
  let maxArray = []
  for(let i = 1;i<k;i++){
      head.next = new Node(nums[i])
      head = head.next
  }
  let largestVal = findLargest(reset)
  maxArray.push(largestVal)
  while(k < nums.length){
      head.next = new Node(nums[k])
      head = head.next
      if(nums[k] >largestVal){
          largestVal = nums[k]
      }
      else{
          if(reset.val === largestVal){
              let nextLargest = findLargest(reset.next)
              largestVal = nextLargest
          }
      }
      reset = reset.next
      maxArray.push(largestVal)
      k+=1
  }
  return maxArray
};

function findLargest(node,k){
  let largest = -Infinity
  while(node){
      largest = Math.max(largest, node.val)
      node = node.next
  }
  return largest
}

class Node{
  constructor(val){
      this.val = val
      this.next = null
  }
}
