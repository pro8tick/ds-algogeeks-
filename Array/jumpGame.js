var jump = function (nums) {
  let curCoverage = 0,
    lastJump = 0;
  let timesOfJump = 0;

  if (nums.length == 1) return 0;

  for (let i = 0; i < nums.length; i++) {
    curCoverage = Math.max(curCoverage, i + nums[i]);

    if (i == lastJump) {
      timesOfJump++;
      lastJump = curCoverage;
      if (i >= curr) return -1;
      if (curCoverage >= nums.length - 1) return timesOfJump;
    }
  }
};

class Solution {
  minJumps(arr, n) {
    //code here
    if (n <= 1) {
      return 0;
    }
    if (arr[0] === 0) return -1;

    let maxReach = arr[0];
    let steps = arr[0];
    let jump = 1;

    for (let i = 1; i < n; i++) {
      if (i === n - 1) return jump;

      maxReach = Math.max(maxReach, i + arr[i]);

      steps--;

      if (steps === 0) {
        jump++;
        if (i >= maxReach) return -1;
        steps = maxReach - i;
      }
    }
    return -1;
  }
}
