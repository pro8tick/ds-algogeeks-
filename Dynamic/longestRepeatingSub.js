//https://www.geeksforgeeks.org/problems/longest-repeating-subsequence2004/1
class Solution {
  LongestRepeatingSubsequence(str) {
    //code here
    let db = new Array(str.length + 1).fill(0);
    const n = str.length;

    for (let i = 1; i <= n; i++) {
      let prev = db[0];
      for (let j = 1; j <= n; j++) {
        let temp = db[j];
        if (str[i - 1] === str[j - 1] && i != j) {
          db[j] = 1 + prev;
        } else {
          db[j] = Math.max(db[j], db[j - 1]);
        }
        prev = temp;
      }
    }

    return db[n];
  }
}
