var rob = function (nums) {
  function helper(arr) {
    let maxTwoBefore = 0;
    let maxOneBefore = 0;
    let maxCurrent;
    for (let i = 0; i < arr.length; i++) {
      maxCurrent = Math.max(arr[i] + maxTwoBefore, maxOneBefore);
      maxTwoBefore = maxOneBefore;
      maxOneBefore = maxCurrent;
    }
    return maxOneBefore;
  }
  return Math.max(nums[0], helper(nums.slice(1)), helper(nums.slice(0, -1)));
};
