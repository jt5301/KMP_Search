

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
