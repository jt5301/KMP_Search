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
