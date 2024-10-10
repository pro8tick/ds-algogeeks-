var networkDelayTime = function (times, n, k) {
  let distance = new Array(n + 1).fill(Infinity);
  distance[k] = 0;
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let [u, v, t] of times) {
      if (distance[u] == Infinity) continue;
      if (distance[u] + t < distance[v]) {
        distance[v] = distance[u] + t;
        count++;
      }
    }
    if (count == 0) break;
  }

  let result = Math.max(...distance.slice(1));
  return result === Infinity ? -1 : result;
};
