//Given an array arr[] of size N, check if it can be partitioned into two parts such that the sum of elements in both parts is the same.

class Solution {
  equalPartition(arr, n) {
    //your code herelet
    let sum = arr.reduce((a, b) => a + b, 0);
    if (sum % 2 === 1) return false;
    sum = sum / 2;
    let dp = new Array(n + 1).fill(0).map(() => new Array(sum + 1));

    for (let i = 0; i <= n; i++) {
      dp[i][0] = true;
    }

    for (let j = 1; j <= sum; j++) {
      dp[0][j] = false;
    }

    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= sum; j++) {
        if (arr[i - 1] > j) {
          dp[i][j] = dp[i - 1][j];
        } else {
          dp[i][j] = dp[i - 1][j] || dp[i - 1][j - arr[i - 1]];
        }
      }
    }

    return dp[n][sum];
  }
}
