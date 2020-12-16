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
