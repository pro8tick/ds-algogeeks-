var orangesRotting = function (grid) {
  let fresh = 0;
  let queue = [],
    minutes = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 2) {
        queue.push([i, j]);
      } else if (grid[i][j] == 1) {
        fresh++;
      }
    }
  }
  const dirs = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
  ];
  while (queue.length > 0 && fresh) {
    let size = queue.length;
    while (size--) {
      let curCell = queue.shift();
      dirs.forEach((dir) => {
        let posX = curCell[0] + dir[0];
        let posY = curCell[1] + dir[1];

        if (
          posX > -1 &&
          posX < grid.length &&
          posY > -1 &&
          posY < grid[0].length &&
          grid[posX][posY] === 1
        ) {
          fresh--;
          grid[posX][posY] = 2;
          queue.push([posX, posY]);
        }
      });
    }
    minutes++;
  }
  return fresh ? -1 : minutes;
};
