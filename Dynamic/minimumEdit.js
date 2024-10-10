var minDistance = function (word1, word2) {
  function editDistance(word1, word2, m, n) {
    if (m === 0) {
      return n;
    }
    if (n === 0) {
      return m;
    }

    if (word1[m - 1] === word2[n - 1]) {
      return editDistance(word1, word2, m - 1, n - 1);
    } else {
      return (
        1 +
        Math.min(
          editDistance(word1, word2, m - 1, n),
          editDistance(word1, word2, m, n - 1),
          editDistance(word1, word2, m - 1, n - 1)
        )
      );
    }
  }
  const l1 = word1.length;
  const l2 = word2.length;
  return editDistance(word1, word2, l1, l2);
};

console.log(minDistance("horse", "ros"));

class Solution {
  editDistance(str1, str2) {
    // code here
    let dp = new Array(str1.length + 1)
      .fill(0)
      .map(() => new Array(str2.length + 1).fill(0));

    for (let i = 0; i <= str1.length; i++) {
      for (let j = 0; j <= str2.length; j++) {
        if (i == 0) dp[i][j] = j;
        else if (j == 0) dp[i][j] = i;
        else if (str1[i - 1] === str2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]);
        }
      }
    }
    return dp[str1.length][str2.length];
  }
}
