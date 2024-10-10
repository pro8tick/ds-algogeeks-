var countBits = function (n) {
  const res = new Array(n).fill(-1);

  res[0] = 0;
  if (n === 0) return res;
  res[1] = 1;
  if (n === 1) return res;

  for (let i = 2; i <= n; i++) {
    let q = Math.floor(i / 2);
    let r = i % 2;
    res[i] = res[q] + r;
  }
  return res;
};
