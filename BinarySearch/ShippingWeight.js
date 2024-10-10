var shipWithinDays = function (weights, days) {
  let low = Math.max(...weights);
  let high = weights.reduce((a, b) => a + b, 0);

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let minDays = getDays(mid);
    if (minDays > days) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low;

  function getDays(wlimit) {
    let days = 1;
    let currentw = 0;

    for (let w of weights) {
      currentw += w;
      if (currentw > wlimit) {
        days++;
        currentw = w;
      }
    }
    return days;
  }
};
