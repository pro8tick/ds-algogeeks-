class Solution {
  lookandsay(n) {
    // code here
    let res = ["1"];

    for (let i = 1; i < n; i++) {
      let prev = res[i - 1];
      let curr = "";
      for (let j = 0; j < prev.length; j++) {
        let count = 1;
        while (j + 1 < prev.length && prev[j] == prev[j + 1]) {
          count++;
          j++;
        }
        curr += count.toString() + prev[j];
      }
      res.push(curr);
    }
    return res[n - 1];
  }
}
