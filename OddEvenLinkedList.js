// 328. Odd Even Linked List

// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

// The first node is considered odd, and the second node is even, and so on.

// Note that the relative order inside both the even and odd groups should remain as it was in the input.
// Input: head = [1,2,3,4,5]
// Output: [1,3,5,2,4]
var oddEvenList = function (head) {
  if (!head) return null
  let even = head.next
  let evenReset = even
  let reset = head
  while (even) {
    if (even.next) {
      head.next = even.next
      even.next = even.next.next
    }
    if (head.next == even) break
    head = head.next
    even = even.next
  }
  head.next = evenReset
  return reset
}
