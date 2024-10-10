/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// var longestCommonSubsequence = function (text1, text2) {
//   const m = text1.length;
//   const n = text2.length;
//   const L = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(null));

//   for (let i = 0; i <= m; i++) {
//     for (j = 0; j <= n; j++) {
//       if (i == 0 || j == 0) L[i][j] = 0;
//       else if (text1[i - 1] == text2[j - 1]) L[i][j] = L[i - 1][j - 1] + 1;
//       else L[i][j] = Math.max(L[i - 1][j], L[i][j - 1]);
//     }
//   }
//   return L[m][n];
// };

class Solution {
  // Function to find the length of longest common subsequence in two strings.
  lcs(n, m, str1, str2) {
    // code here
    let db = new Array(m + 1).fill(0);

    for (let i = 1; i <= n; i++) {
      let prev = db[0];
      for (let j = 1; j <= m; j++) {
        let temp = db[j];
        if (str1[i - 1] == str2[j - 1]) {
          db[j] = 1 + prev;
        } else {
          db[j] = Math.max(db[j], db[j - 1]);
        }
        prev = temp;
      }
    }
    return db[m];
  }
}
