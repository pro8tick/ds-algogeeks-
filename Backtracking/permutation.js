// Given an array nums of distinct integers, return all the possible permutations.
//  You can return the answer in any order.
var permute = function (nums) {
  const result = [];
  const backtrack = (nums, path) => {
    if (nums.length === 0) {
      result.push(path);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      const currentArray = nums.slice();
      const next = currentArray.splice(i, 1);
      backtrack(currentArray, path.concat(next));
    }
  };

  backtrack(nums, []);
  return result;
};
