var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let prev = intervals[0];
  const result = [prev];
  for (let i = 1; i < intervals.length; i++) {
    let curr = intervals[i];
    if (prev[1] >= curr[0]) {
      prev[1] = [Math.max(prev[1], curr[1])];
    } else {
      result.push(curr);
      prev = curr;
    }
  }
  return result;
};
