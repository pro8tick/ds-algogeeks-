var exist = function (board, word) {
  let h = board.length;
  let w = board[0].length;
  const dir = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (go(i, j, 0)) return true;
    }
  }
  return false;

  function go(x, y, k) {
    if (board[x][y] !== word[k]) return false;
    if (k === word.length - 1) return true;

    board[x][y] = "*";
    dir.forEach((cordi) => {
      const dx = x + cordi[0];
      const dy = y + cordi[1];
      if (dx >= 0 && dx < h && dy >= 0 && dy < w) {
        if (go(dx, dy, k + 1)) return true;
      }
    });
    board[x][y] = word[k];
    return false;
  }
};

let board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];

console.log(exist(board, "AB"));
