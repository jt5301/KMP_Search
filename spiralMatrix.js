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
