// Given an array arr[] of size N and an integer K. The task is to find the minimum number of elements that should be removed, such that Amax-Amin<=K. After the removal of elements, Amax and Amin is considered among the remaining elements.
class Solution {
  //Function to remove kth element from a list.
  removals(arr, n, k) {
    //your code here
    arr.sort((a, b) => a - b);
    let diff = 0;
    let len = 0;
    for (let i = 0, j = 0; j < n; j++) {
      diff = arr[j] - arr[i];
      while (i <= j && diff > k) {
        diff = arr[j] - arr[++i];
      }
      len = Math.max(len, j - i + 1);
    }
    return n - len;
  }
}
