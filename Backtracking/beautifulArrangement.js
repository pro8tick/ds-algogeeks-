/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function (n) {
  let count = 0;
  const nums = new Array(n).fill().map((_x, i) => i + 1);

  function findArrangement(l) {
    if (l == nums.length) {
      count++;
    }

    for (let r = l; r < nums.length; r++) {
      swap(nums, r, l);
      if (nums[l] % (l + 1) === 0 || (l + 1) % nums[l] === 0) {
        findArrangement(l + 1);
      }
      swap(nums, r, l);
    }
  }

  findArrangement(0);
  return count;
};

function swap(nums, left, right) {
  [nums[left], nums[right]] = [nums[right], nums[left]];
}
