
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
