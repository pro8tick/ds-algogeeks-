class Solution {
  maxLen(arr, n) {
    //code here
    const map = new Map();
    let sum = 0;

    let maxi = 0;

    for (let i = 0; i < n; i++) {
      sum += arr[i];
      if (sum == 0) {
        maxi = i + 1;
      } else {
        if (map.has(sum)) {
          maxi = Math.max(maxi, i - map.get(sum));
        } else {
          map.set(sum, i);
        }
      }
    }
    return maxi;
  }
}

//return max length of subarray with sum zero
