var integerBreak = function (n) {
  let memo = new Map();

  function dp(n) {
    if (n == 1 || n == 2) return 1;
    if (memo.has(n)) return memo.get(n);
    let p = 0;
    for (let i = 1; i <= n / 2; i++) {
      p = Math.max(p, i * Math.max(n - i, dp(n - i)));
    }
    memo.set(n, p);
    return p;
  }

  return dp(n);
};

// Given an integer n, break it into the sum of k positive integers,
// where k >= 2, and maximize the product of those integers.
