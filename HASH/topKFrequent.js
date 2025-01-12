var topKFrequent = function (nums, k) {
  let res = [],
    map = new Map();

  nums.forEach((n) => map.set(n, map.get(n) + 1 || 1));

  let sortedArray = [...map.entries()].sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) {
    res.push(sortedArray[i][0]);
  }

  return res;
};
