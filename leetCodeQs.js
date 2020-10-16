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
  if (!root) return null
  function invert(rootNode) {
    let temp = rootNode.left
    rootNode.left = rootNode.right
    rootNode.right = temp
    if (rootNode.left) invert(rootNode.left)
    if (rootNode.right) invert(rootNode.right)
  }
  invert(root)
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

console.log(findSubString('bloomberg', 'mooob'))


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
  //sort items by weight from lowest to highest
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
      if (sortedItems[row][1] <= col) {
        ksArr[row][col] = Math.max(ksArr[row - 1][col], sortedItems[row][0] + ksArr[row - 1][col - (sortedItems[row][1])])
      }
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
  for (let i = 1; i < array.length; i++) {
    let highestTotal = array[i]
    let lastIndex = i
    for (let k = i - 1; k >= 0; k--) {
      if (array[i] > array[k] && array[i] + totals[k] > highestTotal) {
        highestTotal = array[i] + totals[k]
        lastIndex = k
      }
    }
    totals.push(highestTotal)
    lastIndexTracker.push(lastIndex)
  }
  let maxSum = -Infinity
  let indexOfMaxSum = 0
  for (let i = 0; i < totals.length; i++) {
    if (totals[i] > maxSum) {
      maxSum = totals[i]
      indexOfMaxSum = i
    }
  }
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
