var networkDelayTime = function (times, n, k) {
  const time = [...Array(n + 1)].fill(Infinity);
  time[k] = 0;
  for (let i = 0; i < n; i++) {
    for (const [u, v, t] of times) {
      if (time[u] === Infinity) continue;
      if (time[u] + t < time[v]) {
        time[v] = time[u] + t;
      }
    }
  }

  let res = Math.max(...time.slice(1));

  return res === Infinity ? -1 : res;
};
