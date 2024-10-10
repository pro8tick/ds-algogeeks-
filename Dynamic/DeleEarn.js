/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/problems/delete-and-earn/description/
 */
var deleteAndEarn = function (nums) {
  const count = [];
  for (let num of nums) {
    count[num] = (count[num] || 0) + num;
  }
  let maxLen = Math.max(...nums);
  const dp = new Array(maxLen + 1).fill(0);
  dp[1] = count[1] || 0;
  for (let j = 2; j <= maxLen; j++) {
    dp[j] = Math.max(dp[j - 1], (count[j] || 0) + dp[j - 2]);
  }

  return dp[maxLen];
};
