var combinationSum2 = function (candidates, target) {
  if (target === 0) {
    return [[]];
  }

  candidates.sort((a, b) => {
    return a - b;
  });

  let paths = [];

  let find = function (t, p, i) {
    if (t === 0) {
      paths.push(p);
    } else {
      while (i < candidates.length && t - candidates[i] >= 0) {
        find(t - candidates[i], [...p, candidates[i]], i + 1);
        i++;
        while (candidates[i - 1] === candidates[i]) {
          i++;
        }
      }
    }
  };

  find(target, [], 0);
  return paths;
};
