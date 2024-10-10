class Solution {
  //Function to return max value that can be put in knapsack of capacity W.
  knapSack(W, wt, val, n) {
    // code here
    let dp = new Array(W + 1).fill(0);

    for (let i = 0; i < n; i++) {
      for (let w = W; w >= 0; w--) {
        if (wt[i] <= w) {
          dp[w] = Math.max(dp[w], dp[w - wt[i]] + val[i]);
        }
      }
    }

    return dp[W];
  }
}
