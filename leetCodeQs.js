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
