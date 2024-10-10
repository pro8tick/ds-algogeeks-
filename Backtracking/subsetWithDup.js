var subsetsWithDup = function (nums) {
  const result = [];
  nums.sort();

  const modify = (i, combi) => {
    result.push(combi);
    while (i < nums.length) {
      modify(i + 1, [...combi, nums[i]]);
      i++;
      while (nums[i] === nums[i - 1]) {
        i++;
      }
    }
  };

  modify(0, []);

  return result;
};
