/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const map = { 0: 1 };
  let sum = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map[sum - k]) {
      count += map[sum - k];
    }
    map[sum] = map[sum] ? map[sum] + 1 : 1;
  }
};

//subarray sum r3turn array of indexs of the first encounter

class Solution {
  // Function to find a continuous sub-array which adds up to a given number.
  subarraySum(arr, n, s) {
    // your code here
    let left = 0;
    let right = 0;
    let sum = 0;
    let flag = false;
    let res = [];

    while (right < n.length) {
      sum += arr[right];

      if (sum >= s) {
        while (s < sum && left < right) {
          sum -= arr[left];
          ++left;
        }

        if (sum == s) {
          res.push(left + 1);
          res.push(right + 1);
          flag = true;
          break;
        }
      }
      right++;
    }

    if (!flag) res.push(-1);
    return res;
  }
}
