// Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray
//  whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

var minSubArrayLen = function (target, nums) {
  let left = 0,
    right = 0,
    sum = 0,
    minLen = Infinity;

  while (right < nums.length) {
    sum += nums[right];
    while (sum >= target) {
      minLen = Math.min(right - left + 1, minLen);
      sum -= nums[left];
      left++;
    }
    right++;
  }
  return minLen === Infinity ? 0 : minLen;
};
