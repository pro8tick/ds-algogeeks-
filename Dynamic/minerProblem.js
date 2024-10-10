//https://www.geeksforgeeks.org/problems/gold-mine-problem2608/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=practice_card
class Solution {
  maxGold(n, m, M) {
    //code here
    let dp = new Array(n).fill().map(() => new Array(m));
    let max = Number.MIN_SAFE_INTEGER;

    for (let j = m - 1; j >= 0; j--) {
      for (let i = n - 1; i >= 0; i--) {
        if (j == m - 1) {
          dp[i][j] = M[i][j];
        } else if (i == 0) {
          dp[i][j] =
            M[i][j] +
            (n > 1 ? Math.max(dp[i][j + 1], dp[i + 1][j + 1]) : dp[i][j + 1]); //for 1 x 5 array we need to only check right side
        } else if (i == n - 1) {
          dp[i][j] = M[i][j] + Math.max(dp[i][j + 1], dp[i - 1][j + 1]);
        } else {
          dp[i][j] =
            M[i][j] +
            Math.max(
              dp[i][j + 1],
              Math.max(dp[i + 1][j + 1], dp[i - 1][j + 1])
            );
        }
      }
    }

    for (let k = 0; k < n; k++) {
      if (dp[k][0] > max) {
        max = dp[k][0];
      }
    }

    return max;
  }
}
