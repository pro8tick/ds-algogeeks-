/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let maxArea = 0,
    n = grid.length,
    m = grid[0].length;

  const traverse = (i, j) => {
    if (i < 0 || j < 0 || i >= n || j >= m || !grid[i][j]) return 0;
    grid[i][j] = 0;
    return (
      1 +
      traverse(i - 1, j) +
      traverse(i, j - 1) +
      traverse(i + 1, j) +
      traverse(i, j + 1)
    );
  };

  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++)
      if (grid[i][j]) maxArea = Math.max(maxArea, traverse(i, j));

  return maxArea;
};
