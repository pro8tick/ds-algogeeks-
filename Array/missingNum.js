var missingNumber = function (n, arr) {
  let total;
  total = ((n + 1) * n) / 2;
  for (let num of arr) {
    total -= num;
  }
  return total;
};
