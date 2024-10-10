// Given a fence with n posts and k colors, find out the number of ways of painting the fence so that not more than two consecutive posts have the same colors

function countWays(n, k) {
  let dp = new Array(n + 1);
  dp.fill(0);
  let mod = 1000000007;
  dp[1] = k;

  let same = 0,
    diff = k;

  for (let i = 2; i <= n; i++) {
    same = diff;
    diff = (dp[i - 1] * (k - 1)) % mod;
    dp[i] = (same + diff) % mod;
  }

  return dp[n];
}
