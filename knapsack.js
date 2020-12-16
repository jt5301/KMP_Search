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
