/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const seen = new Set();
  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    let sum = 0;
    while (n > 0) {
      let m = n % 10;
      sum += m * m;
      n = Math.floor(n / 10);
    }
    n = sum;
  }
  return n === 1;
};

//Starting with any positive integer, replace the number by the sum of the squares of its digits.
//Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
