var minimumJumps = function (forbidden, a, b, x) {
  const visited = new Set(forbidden);
  const limit = 2000 + a + b;
  let q = [[0, 0, true]];
  while (q.length) {
    const [jumps, current, backjump] = q.shift();
    if (current == x) return jumps;

    if (visited.has(current)) continue;
    visited.add(current);
    let nextJump;
    if (backjump) {
      nextJump = current - b;
      if (nextJump >= 0) {
        q.push([jumps + 1, nextJump, false]);
      }
    }
    nextJump = current + a;
    if (nextJump <= limit) {
      q.push([jumps + 1, nextJump, true]);
    }
  }
  return -1;
};
