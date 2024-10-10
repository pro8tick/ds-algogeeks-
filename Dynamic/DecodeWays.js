var numDecodings = function (s) {
  const memo = new Map();

  function run(idx) {
    if (memo.has(idx)) return memo.get(idx);
    if (idx > s.length || s[idx] === "0") return 0;
    if (idx === s.length - 1 || idx === s.length) return 1;
    if (s.slice(idx, idx + 2) > 26) return run(idx + 1);
    const res = run(idx + 1) + run(idx + 2);
    memo.set(idx, res);
    return res;
  }
  return run(0);
};

console.log(numDecodings("226"));
