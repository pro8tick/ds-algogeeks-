var kthFactor = function (n, k) {
  let result = [];

  for (let i = 1; i <= ~~Math.sqrt(n); i++) {
    if (n % i === 0) {
      result.push(i);
      if (n / i !== i) {
        result.push(n / i);
      }
    }
  }

  result.sort((a, b) => a - b);
  return result[k - 1] === undefined ? -1 : result[k - 1];
};
