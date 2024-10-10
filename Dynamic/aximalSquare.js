/**
 * @param {character[][]} matrix
 * @return {number}
 * https://leetcode.com/problems/maximal-square/
 */
var maximalSquare = function (matrix) {
  matrix.forEach((arr) => arr.push("0"));
  matrix.push(new Array(matrix[0].length).fill("0"));

  let maxSquare = 0;

  for (let i = matrix.length - 2; i >= 0; i--) {
    for (j = matrix[0].length - 2; j >= 0; j--) {
      if (matrix[i][j] !== "0") {
        matrix[i][j] =
          Math.min(
            parseInt(matrix[i + 1][j]),
            parseInt(matrix[i][j + 1]),
            parseInt(matrix[i + 1][j + 1])
          ) + 1;
        maxSquare = Math.max(maxSquare, matrix[i][j] * matrix[i][j]);
      }
    }
  }
  return maxSquare;
};
