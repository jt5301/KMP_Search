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
