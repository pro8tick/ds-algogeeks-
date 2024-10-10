var numIslands = function (grid) {
  let count = 0;

  const dfs = (i, j) => {
    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[0].length ||
      grid[i][j] === "0"
    ) {
      return;
    }
    grid[i][j] = "0";
    dfs(i, j + 1);
    dfs(i, j - 1);
    dfs(i + 1, j);
    dfs(i - 1, j);
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs(i, j);
      }
    }
  }
  return count;
};

let grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

console.log(numIslands(grid));
