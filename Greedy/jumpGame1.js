var canJump = function (nums) {
  let step = nums[0];
  let size = nums.length;

  for (let i = 1; i < size; i++) {
    step--;
    if (step < 0) {
      return false;
    }
    if (nums[i] > step) {
      step = nums[i];
    }
  }
  return true;
};

// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.
