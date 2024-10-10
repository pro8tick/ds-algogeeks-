class Solution {
  majorityElement(arr) {
    // your code here
    let count = 0;
    let candidate = -1;

    for (let num of arr) {
      if (count == 0) {
        count = 1;
        candidate = num;
      } else if (candidate === num) {
        count++;
      } else {
        count--;
      }
    }
    count = 0;
    for (let num of arr) {
      if (num === candidate) {
        count++;
      }
    }

    if (count > arr.length / 2) return candidate;
    return -1;
  }
}
