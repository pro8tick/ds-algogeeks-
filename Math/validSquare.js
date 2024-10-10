var validSquare = function (p1, p2, p3, p4) {
  const distance = (a, b) => {
    return (a[0] - b[0]) * (a[0] - b[0]) + (a[1] - b[1]) * (a[1] - b[1]);
  };

  const set = new Set();
  set.add(distance(p1, p2));
  set.add(distance(p1, p3));
  set.add(distance(p1, p4));
  set.add(distance(p2, p3));
  set.add(distance(p2, p4));
  set.add(distance(p3, p4));

  return !set.has(0) && set.size === 2;
};
